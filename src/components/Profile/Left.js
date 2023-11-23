"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import TextMain from "../../shared/Text/TextMain";
import TextSecondary from "../../shared/Text/TextSecondary";
import { ButtonAlert, ButtonGhost } from "../../shared/ui/Button";
import Card from "../../shared/ui/Card";
import EmptyAvatar from "../../shared/ui/EmptyAvatar";
import CustomLoader from "../../shared/ui/CustomLoader";

import LocationIcon from "../../shared/icons/LocationIcon";
import CalendarIcon from "../../shared/icons/CalendarIcon";
import PenIcon from "../../shared/icons/PenIcon";

const Left = ({ navState, data }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(pointer:coarse)" });
  const location = [data.city, data.country];

  return (
    <div
      className={`${
        navState == true
          ? "[@media(hover)]:flex [@media(pointer:coarse)]:flex flex-col gap-[16px] [@media(pointer:coarse)]:gap-[12px]"
          : "[@media(hover)]:flex [@media(pointer:coarse)]:hidden flex-col gap-[16px] [@media(pointer:coarse)]:gap-[12px]"
      }
   
  transition duration-[250ms] [@media(hover)]:top-[86px] [@media(hover)]:fixed [@media(hover)]:max-w-[260px]  w-full`}
    >
      <Card
        style="[@media(hover)]:max-w-[260px] w-full h-fit flex flex-col gap-[12px]"
        padding={12}
      >
        <div className="rounded-[8px] relative overflow-hidden aspect-square [@media(pointer:coarse)]:w-full [@media(pointer:coarse)]:h-full [@media(hover)]:min-w-[236px] [@media(hover)]:min-h-[236px]  [@media(hover)]:w-[236px] [@media(hover)]:h-[236px]">
          <p className="absolute bg-[#74899B] bg-opacity-[8%] text-[13px] select-none text-[#5875e8] font-medium px-[8px] py-[4px] bottom-0 left-0 rounded-tr-[8px]">
            {data.role === "student" ? "Соискатель" : "HR"}
          </p>
          {data.image ? (
            <Image
              src={data.image}
              alt="Profile photo"
              className="[@media(hover)]:min-w-[236px] object-cover [@media(hover)]:w-[236px] [@media(hover)]:h-[236px] [@media(hover)]:min-h-[236px] [@media(pointer:coarse)]:w-full [@media(pointer:coarse)]:h-full"
              width={236}
              height={236}
              quality={100}
              priority={true}
            />
          ) : (
            <EmptyAvatar />
          )}
        </div>

        <div className="flex flex-col">
          {/* name and username */}
          <div className="flex flex-col gap-[8px]">
            <TextMain
              text={data.name}
              style="font-medium text-[18px] leading-[21.6px] tracking-[-0.025em]"
            />
            <TextSecondary
              text={`@${data.username}`}
              style="font-medium text-[14px] leading-[16px] tracking-[-0.015em]"
            />
          </div>
          {/* name and username */}

          {/* location and birth date */}
          <div className="flex flex-col">
            {(data.city === null && data.country === null) ||
            (data.city?.length === 0 && data.country?.length === 0) ? null : (
              <div className="flex flex-row gap-[8px] mt-[12px]">
                <LocationIcon />
                <TextSecondary
                  text={location.map((i, key) =>
                    !i
                      ? ""
                      : `${i}${
                          location[key + 1] === null ||
                          location[key + 1]?.length === 0 ||
                          key === location.length - 1
                            ? ""
                            : ", "
                        }`
                  )}
                  style="font-normal text-[14px] leading-[18px] tracking-[-0.015em]"
                />
              </div>
            )}

            {data.birthDate && (
              <div className="flex flex-row gap-[8px] mt-[12px]">
                <CalendarIcon />
                <TextSecondary
                  text={data.birthDate}
                  style="font-normal text-[14px] leading-[18px] tracking-[-0.015em]"
                />
              </div>
            )}
          </div>
          {/* location and birth date */}
        </div>
      </Card>

      <div
        className={`p-[12px] rounded-[20px] items-center flex flex-row max-w-[260px] w-full [@media(pointer:coarse)]:max-w-[100%] bg-[#74899B] bg-opacity-[8%]`}
      >
        <ButtonAlert text="Выход" onClick={signOut} />
      </div>
    </div>
  );
};

export default Left;