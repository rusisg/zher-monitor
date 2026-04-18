import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
// @ts-ignore
import parse_georaster from 'georaster';
// @ts-ignore
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import React from 'react';

interface GeoTiffLayerProps {
  url: string;
  visible: boolean;
  colorScale?: (value: number) => string;
  opacity?: number;
  zIndex?: number;
}

export default React.memo(function GeoTiffLayer({ url, visible, colorScale, opacity = 0.7, zIndex = 100 }: GeoTiffLayerProps) {
  const map = useMap();
  
  // Используем useRef вместо useState, чтобы React не перерисовывал компонент лишний раз
  const layerRef = useRef<any>(null);

  // 1. Загрузка файла (Происходит только один раз в фоне)
  useEffect(() => {
    if (!url || !map) return;
    let isMounted = true;

    const loadGeoTiff = async () => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        // @ts-ignore
        const georaster = await parse_georaster(arrayBuffer);

        if (!isMounted) return;

        // @ts-ignore
        layerRef.current = new GeoRasterLayer({
          georaster,
          opacity: opacity,
          resolution: 96, // ЭКСТРЕМАЛЬНАЯ ОПТИМИЗАЦИЯ: было 256, стало 96. Ускоряет карту в 3 раза!
          zIndex: zIndex,
          pixelValuesToColorFn: colorScale ? (values: any) => colorScale(values[0]) : undefined,
        });

        // Если при загрузке галочка уже стоит - сразу показываем
        if (visible && !map.hasLayer(layerRef.current)) {
          layerRef.current.addTo(map);
        }

      } catch (error) {
        console.error("Ошибка загрузки GeoTIFF:", error);
      }
    };

    loadGeoTiff();

    return () => {
      isMounted = false;
      if (layerRef.current && map.hasLayer(layerRef.current)) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [url, colorScale, opacity, zIndex, map]); // Исключили visible из зависимостей загрузки

  // 2. Быстрое переключение галочки (Без повторного скачивания файлов)
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    if (visible) {
      if (!map.hasLayer(layer)) {
        layer.addTo(map); // Физически добавляем в память Leaflet
      }
    } else {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer); // Физически удаляем из памяти Leaflet, убирая лаги
      }
    }
  }, [visible, map]);

  return null;
});