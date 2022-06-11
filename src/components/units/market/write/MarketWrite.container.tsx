import MarketWriteUI from "./MarketWrite.presenter";
import { ChangeEvent, useEffect, useState } from "react";

export default function MarketWrite() {
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", ""]);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  return (
    <MarketWriteUI imageUrls={imageUrls} zipcode={zipcode} address={address} />
  );
}
