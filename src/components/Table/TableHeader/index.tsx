import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SelectInput, SelectDate, Input } from "../../../components";
import useInput from "../../../utils/hooks/useInput";
import { Filter } from "../../../assets";
import { FilteredQuery } from "../index";
import style from "./index.module.scss";

interface ITableHeader {
  orgNames: string[];
  setFilterQuery: Dispatch<SetStateAction<FilteredQuery>>;
}

interface Heading {
  value: string;
  mobile?: boolean;
}

const heading: Required<Heading[]> = [
  {
    value: "Organization",
  },
  {
    value: "Username",
    mobile: true,
  },
  {
    value: "Email",
  },

  {
    value: "Phone Number",
  },
  {
    value: "Date Joined",
    mobile: true,
  },
  {
    value: "Status",
    mobile: true,
  },
];

const TableHeader: FC<ITableHeader> = ({ orgNames, setFilterQuery }) => {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [selectedOrg, setSelectedOrg] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [userNameFilter, setUserNameFilter, clearNameFilter] =
    useInput<string>("");
  const [emailFilter, setEmailFilter, clearEmailFilter] = useInput<string>("");
  const [numberFilter, setNumberFilter, clearNumberFilter] =
    useInput<string>("");
  const [dateFilter, setDateFilter, clearDateFilter] = useInput<string>("");
  const [detailsHeight, setDetailsHeight] = useState(0);
  const itemsEl = useRef<HTMLDivElement>(null);

  const clearAllFields = () => {
    setToggleFilter(false);
    setSelectedOrg([]);
    setSelectedStatus([]);
    clearNameFilter();
    clearEmailFilter();
    clearNumberFilter();
  };
  useEffect(() => {
    setDetailsHeight(itemsEl.current?.scrollHeight ?? 0);
  }, [itemsEl]);
  useEffect(() => {
    setFilterQuery({
      orgName: selectedOrg,
      userName: String(userNameFilter),
      email: String(emailFilter),
      phoneNumber: String(numberFilter),
      createdAt: String(dateFilter),
      status: selectedStatus,
    });
  }, [
    selectedOrg,
    selectedStatus,
    userNameFilter,
    emailFilter,
    numberFilter,
    dateFilter,
    setFilterQuery,
  ]);
  return (
    <div className={style.TableHeader} data-testid="table-header-container">
      <div className={style.TableHeader__heading}>
        {heading.map((prop) => (
          <div
            className={`${style.TableHeader__heading__container}  ${
              !!prop.mobile && style.TableHeader__heading__container__display
            }`}
            key={`tableHeader-${prop.value}`}
            data-testid="table-heading"
          >
            <span className={style.TableHeader__heading__container__content}>
              {prop.value}
            </span>
            <Filter
              className={style.TableHeader__heading__container__icon}
              onClick={() => setToggleFilter((props) => !props)}
              data-testid="table-filter"
            />
          </div>
        ))}
      </div>

      <div
        ref={itemsEl}
        style={{ height: toggleFilter ? `${detailsHeight}px` : 0 }}
        className={`${style.TableHeader__filter} ${
          toggleFilter && style.TableHeader__filter__active
        }`}
        data-testid="table-filter-container"
      >
        <div className={style.TableHeader__filter__container}>
          <div className={style.TableHeader__filter__container__input}>
            <SelectInput
              {...{
                selectedData: selectedOrg,
                setSelectedData: setSelectedOrg,
                data: orgNames,
                label: "Organization",
                placeholder: "Select",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <Input
              {...{
                label: "Username",
                placeholder: "User",
                value: String(userNameFilter),
                setValue: setUserNameFilter,
                clearValue: clearNameFilter,
                type: "text",
              }}
              className={`${style.TableHeader__filter__container__input__text} ${style.TableHeader__filter__container__input__display}`}
            />
            <Input
              {...{
                label: "Email",
                placeholder: "Email",
                value: String(emailFilter),
                setValue: setEmailFilter,
                clearValue: clearEmailFilter,
                type: "email",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <SelectDate
              {...{
                label: "Date",
                placeholder: "Date",
                value: String(dateFilter),
                setValue: setDateFilter,
                clearValue: clearDateFilter,
                type: "date",
              }}
              className={`${style.TableHeader__filter__container__input__text} ${style.TableHeader__filter__container__input__text__display}`}
            />
            <Input
              {...{
                label: "Phone Number",
                placeholder: "Phone Number",
                value: String(numberFilter),
                setValue: setNumberFilter,
                clearValue: clearNumberFilter,
                type: "text",
              }}
              className={style.TableHeader__filter__container__input__text}
            />

            <SelectInput
              {...{
                selectedData: selectedStatus,
                setSelectedData: setSelectedStatus,
                data: ["Active", "Inactive", "Pending", "Blacklisted"],
                label: "Status",
                placeholder: "Select",
              }}
              className={style.TableHeader__filter__container__input__display}
            />
            <div className={style.buttonDiv}>
              <button onClick={clearAllFields} className={style.resetButton}>
                Reset
              </button>
              <button className={style.filterButton}>Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
