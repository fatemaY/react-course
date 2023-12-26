import { GiftsContext } from "../GiftContext";
import { Son } from "./Son";
import { useContext } from "react";


export const Father = () => {

    const { setGifts } = useContext(GiftsContext);
    const fathersGifts = ["Watch", "Book", "Tie", "Gadget"];
    setGifts(fathersGifts);
  
    return (
      <div>
        <h3>Father</h3>
        <Son />
      </div>
    );
  };