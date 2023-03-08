import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "components/BookingForm/BookingForm";

test("Renders the BookingForm", () => {
    render(<BookingForm />);
    const submitBtn = screen.getByText("Make Reservation");
    expect(submitBtn).toBeInTheDocument();
});

test("Updates the date correctly", () => {
    render(<BookingForm />);
    const dateSelector = screen.getByRole("datePick");
    fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
    expect(dateSelector.value).toEqual("2023-02-05");
});

test("Updates the time correctly", () => {
    render(<BookingForm />);
    const dateSelector = screen.getByRole("datePick");
    fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
    setTimeout(() => {
        const timeDropDown = screen.getByRole("timePick");
        const firstOpt = timeDropDown.options[0].text;
        fireEvent.change(timeDropDown, { target: { value: firstOpt } });
        expect(timeDropDown.value).toEqual(firstOpt);
    }, 200);
});