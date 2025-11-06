import { useState } from "react";

function DatePicker(props: { id: string, value: Date, onChange: (date: Date) => void }) {
    return (
        <div>
            <input id={props.id} type='date' value={props.value.toISOString().split('T')[0]} onChange={(e) => props.onChange(new Date(e.target.value))} />
        </div>
    );
}

export default function MultiDatePicker(props: {selectedDates?: Date[], onDatesChange?: (dates: Date[]) => void}) {
    return (
        <div>
            <h3>Available Dates</h3>
            {props.selectedDates?.map((date, index) => (
                <DatePicker key={index} id={`date-picker-${index}`} value={date} onChange={(newDate) => {
                    const updatedDates = [...(props.selectedDates || [])];
                    updatedDates[index] = newDate;
                    props.onDatesChange?.(updatedDates);
                }} />
            ))}
            <button type="button" onClick={() => {
                const updatedDates = [...(props.selectedDates || []), new Date()];
                props.onDatesChange?.(updatedDates);
            }}>
                Add Date
            </button>
        </div>
    );
}
