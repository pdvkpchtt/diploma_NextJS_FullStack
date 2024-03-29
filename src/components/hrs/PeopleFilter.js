"use client";

import { useState } from "react";

import TextSecondary from "../../shared/Text/TextSecondary";
import SkillCard from "../../shared/ui/SkillCard";
import DropDownWithSearch from "../../shared/ui/DropDownWithSearch";
import SkillsDropDownUser from "../../shared/ui/SkillsDropDownUser";

import AddSkillIcon from "../../shared/icons/AddSkillIcon";

const PeopleFilters = ({
  dropDataVacancies = {},
  updatePeople = [],
  setUpdatePeople = () => {},
  skills,
}) => {
  const [isOpen, toggle] = useState(false);
  const [isOpen2, toggle2] = useState(false);

  return (
    <div className="w-full  flex flex-col gap-[16px] h-fit bg-white dark:bg-[#212122] p-[12px] rounded-b-[20px]">
      <div className="flex flex-col w-full">
        <TextSecondary
          text={"Город"}
          style="font-medium text-[14px] select-none leading-[16.8px] tracking-[-0.013em] mb-[6px]"
        />
        <DropDownWithSearch
          city={updatePeople?.peoplecity?.label}
          setCity={(val) => {
            setUpdatePeople({
              ...updatePeople,
              peoplecity: val,
            });
          }}
          items={dropDataVacancies?.peoplecity?.filter((i) => i.label !== null)}
          placeholder={"Не выбрано"}
        />
      </div>

      {/* <div className="flex flex-col relative gap-[16px]">
        {updatePeople.UserSkills.length === 0 ? (
          <div className="flex flex-col">
            <TextSecondary
              text={"Скиллы"}
              style="font-medium text-[14px] select-none leading-[16.8px] tracking-[-0.013em] mb-[6px]"
            />
            <AddCityIcon onClick={() => setSkillsModal(true)} />
          </div>
        ) : (
          <>
            {updatePeople.UserSkills.filter((item) => item.type !== "soft")
              .length > 0 && (
              <div className="flex flex-col gap-[8px]">
                <TextSecondary
                  text={"Хард-скиллы"}
                  style="font-medium text-[14px] leading-[18px] tracking-[-0.013em] whitespace-nowrap"
                />

                <div className="flex flex-row gap-[8px] flex-wrap">
                  {updatePeople.UserSkills.map(
                    (item) =>
                      item.type === "hard" && (
                        <SkillCard
                          noCopy
                          onClick={() => setSkillsModal(true)}
                          text={item.name}
                          key={item.id}
                        />
                      )
                  )}
                </div>
              </div>
            )}
            {updatePeople.UserSkills.filter((item) => item.type !== "hard")
              .length > 0 && (
              <div className="flex flex-col gap-[8px]">
                <TextSecondary
                  text={"Софт-скиллы"}
                  style="font-medium text-[14px] leading-[18px] tracking-[-0.013em] whitespace-nowrap"
                />

                <div className="flex flex-row gap-[8px] flex-wrap">
                  {updatePeople.UserSkills.map(
                    (item) =>
                      item.type === "soft" && (
                        <SkillCard
                          noCopy
                          onClick={() => setSkillsModal(true)}
                          soft
                          hard={false}
                          text={item.name}
                          key={item.id}
                        />
                      )
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div> */}
      {/* skills */}
    </div>
  );
};

export default PeopleFilters;
