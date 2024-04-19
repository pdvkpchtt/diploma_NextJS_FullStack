"use client";

import { useEffect, useState } from "react";

import Modal from "../../shared/ui/Modal";
import CustomLoader from "../../shared/ui/CustomLoader";
import ConnectionCard from "../../shared/ui/ConnectionCard";
import TextCaption from "../../shared/Text/TextCaption";
import MobileModal from "../../shared/ui/MobileModal";
import MobileHeader from "../../shared/ui/MobileHeader";
import { fetchGetRecruters } from "../../server/actions/connections/fetchGetRecruters";

import Cross2 from "../../shared/icons/Cross2";
import TestCard3 from "@/shared/ui/TestCard3";
import TextMain from "@/shared/Text/TextMain";
import { LayoutGroup } from "framer-motion";

const TestModal = ({
  modalState = false,
  setModalState = () => {},
  VacTests,
}) => {
  console.log(VacTests);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <Modal
        withScroll
        isOpen={modalState}
        handleClose={() => setModalState(false)}
      >
        {/* header */}
        <div className="flex flex-row justify-end pb-[12px] relative">
          <Cross2 onClick={() => setModalState(false)} />

          <div className="h-[0.5px] w-[calc(100%+24px)] bg-[#e7e7e7] dark:bg-[#2f2f2f] absolute top-[30px] left-[-12px]" />
        </div>
        {/* header */}

        {/* body */}
        <div className="h-[371px] mt-[12px] flex flex-col gap-[12px]">
          <LayoutGroup>
            <TextMain
              text={"Тесты"}
              style="font-semibold text-[14px] w-full leading-[18px] mb-[-12px] tracking-[-0.182px]"
            />
            <div className="flex flex-col gap-[12px] w-full">
              {VacTests?.map((item, key) => (
                <TestCard3
                  item={item.Test}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ))}
            </div>
          </LayoutGroup>
        </div>
        {/* body */}
      </Modal>
    </>
  );
};

export default TestModal;