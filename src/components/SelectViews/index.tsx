import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import OrgDropDown from "../../assets/icons/OrgDropDown";
import style from "./index.module.scss";

interface SelectViewsInterface {
  select: number;
  setSelect: Dispatch<SetStateAction<number>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}
const values = [10, 20, 30, 50, 100];
const SelectViews: FC<SelectViewsInterface> = ({
  select,
  setSelect,
  setCurrentIndex,
}) => {
  const [toggleItems, setToggleItems] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(0);
  const itemsEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDetailsHeight(itemsEl.current?.scrollHeight ?? 0);
  }, [itemsEl]);
  return (
    <div className={style.SelectViews}>
      <div
        className={`${style.SelectViews__container} ${
          toggleItems && style.SelectViews__container__active
        }`}
        onClick={() => {
          setToggleItems((props) => !props);
          setCurrentIndex(1);
        }}
        onKeyDown={() => {
          setToggleItems((props) => !props);
          setCurrentIndex(1);
        }}
        role="button"
        tabIndex={0}
        data-testid="select-views"
      >
        <div className={style.SelectViews__container__selected}>{select}</div>
        <OrgDropDown
          className={`${style.SelectViews__container__icon} ${
            toggleItems && style.SelectViews__container__icon__active
          }`}
          data-testid="select-views-icon"
        />
      </div>
      <div
        ref={itemsEl}
        style={{ height: toggleItems ? `${detailsHeight}px` : 0 }}
        className={`${style.SelectViews__select} ${
          toggleItems && style.SelectViews__select__active
        }`}
        data-testid="select-views-container"
      >
        {values.map((item) => (
          <div
            className={style.SelectViews__select__option}
            onClick={() => setSelect(item)}
            onKeyDown={() => setSelect(item)}
            role="button"
            tabIndex={0}
            key={`selectViews-${item}`}
            data-testid="select-views-option"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectViews;
