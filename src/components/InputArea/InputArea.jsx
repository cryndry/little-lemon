import React, { useRef, useState, useEffect } from "react";
import s from "./InputArea.module.css";
import { ReactComponent as ArrowDown } from "assets/ArrowDown.svg";
import { useOutsideClick } from "hooks/useOutsideClick";

const InputArea = ({ type, id, Icon, onChange, label, options, selectedOption, dataType, placeholder, ...otherProps }) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const optionsRef = useRef(null);

    useOutsideClick(optionsRef, () => { setOptionsVisible(false) })

    const focusHandler = (e) => {
        if (type === "select") {
            setOptionsVisible(prev => !prev);
        } else {
            e.currentTarget.querySelector("input[type=date]")?.showPicker();
        }
    };

    return (
        <div className={s.InputArea}>
            <label htmlFor={id} className={s.InputContainer} onClick={focusHandler}>
                <div className={s.InputTitle}>{label}</div>
                <div className={s.InputRow} data-type={dataType}>
                    <div className={s.InputIcon}><Icon /></div>
                    {type === "select" ? (
                        <div className={s.SelectedOption} data-placeholder={placeholder} style={{ flexGrow: "1" }}>{selectedOption}</div>
                    ) : (
                        <input type={type} id={id} onChange={onChange} placeholder={placeholder} {...otherProps} />
                    )}
                    {type !== "text" && <div className={s.Arrow}><ArrowDown /></div>}
                    {type === "select" ? (<>
                        {optionsVisible && <div id={id} className={s.Options} ref={optionsRef}>
                            {options.map(opt => (
                                <div key={opt} value={opt} className={s.Option}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOptionsVisible(false);
                                        onChange(e);
                                    }}
                                >{opt}{id === "guests" && " Diners"}</div>
                            ))}
                        </div>}
                    </>) : ""}
                </div>
            </label>
        </div>
    );
};

export default InputArea;