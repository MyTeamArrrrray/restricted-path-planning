import { useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

export default function MapContainer() {
  let map: unknown = null;

  useEffect(() => {
    AMapLoader.load({
      key: "7de043ef071ef6b74ea165842975f630", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "2D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        console.log("🚀 ~ file: index.tsx:21 ~ .then ~ map:", map);
      })
      .catch((e) => {
        console.log(111, e);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <div id="container" className="container" style={{ height: "800px" }}></div>
  );
}
