import React from "react";
import { Collapse } from "react-collapse";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[50px] items-center">
      <div
        className={`border-radius-[30px] py-[-25px] px-[-50px] flex justify-between items-center cursor-pointer ${
          open ? "bg-[#7ed8f3]" : ""
        }`}
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold text-center w-full">{title}</p>
        <div className="text-[30px]">
          {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="pt-[5px]">{desc}</div>
      </Collapse>

      {open ? (
        <hr
          className={`border-[1px] border-[#E5E7EB] my-4 ${"w-full"} mx-auto`}
        />
      ) : (
        <hr
          className={`border-[1px] border-[#E5E7EB] my-4 ${"w-1/2"} mx-auto`}
        />
      )}
    </div>
  );
};

export default AccordionItem;
