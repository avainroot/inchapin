"use client";

import Image from "next/image";
import Select, {
  DropdownIndicatorProps,
  PlaceholderProps,
  components,
} from "react-select";
import { HoverText } from "../HoverText/HoverText";
import { Typography } from "../Typography/Typography";
import downIcon from "@/assets/images/down.svg";
import { useId } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

interface ISelect {
  options: SelectOption[];
}

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, true>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src={downIcon} alt="" />
    </components.DropdownIndicator>
  );
};

const Placeholder = (props: PlaceholderProps<SelectOption>) => {
  return (
    <div style={{ gridArea: "1/1/2/3" }}>
      <HoverText>
        <Typography variant="selectPlaceholder">
          <components.Placeholder {...props} />
        </Typography>
      </HoverText>
    </div>
  );
};

export const SelectButton = ({ options }: ISelect) => {
  return (
    <Select
      options={options}
      placeholder={"Выбрать квартиру"}
      components={{ Placeholder, DropdownIndicator }}
      isSearchable={false}
      styles={{
        control: (base) => ({
          ...base,
          minHeight: "43px",
          borderRadius: "100px",
          background: "var(--brand-color)",
          border: "0",
          padding: "0 20px",
          "@media screen and (min-width: 1770px)": {
            padding: "0 24px",
            minHeight: "51px",
          },
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "0 10px 0 0",
        }),
        singleValue: (base) => ({
          ...base,
          color: "white",
        }),
        dropdownIndicator: () => ({
          padding: "0",
        }),
        placeholder: () => ({
          color: "white !important",
        }),
      }}
      instanceId={useId()}
    />
  );
};
