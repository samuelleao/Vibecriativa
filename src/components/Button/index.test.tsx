/** @jest-environment jsdom */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
    test("renders button with correct text", () => {
        const buttonText = "Click me";
        const { getByText } = render(<Button>{buttonText}</Button>);
        const button = getByText(buttonText);
        expect(button).toBeInTheDocument();
    });

    test("executes onClick callback when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const button = getByText("Click me");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test("applies primary styles when 'primary' prop is true", () => {
        const { getByText } = render(<Button primary>Primary Button</Button>);
        const button = getByText("Primary Button");
        expect(button).toHaveClass("bg-primary-600");
        expect(button).toHaveClass("border-primary-600");
    });

    test("applies secondary styles when 'secondary' prop is true", () => {
        const { getByText } = render(<Button secondary>Secondary Button</Button>);
        const button = getByText("Secondary Button");
        expect(button).toHaveClass("bg-secondary-500");
        expect(button).toHaveClass("border-secondary-500");
    });

    test("applies outline styles when 'outline' prop is true", () => {
        const { getByText } = render(<Button outline>Outline Button</Button>);
        const button = getByText("Outline Button");
        expect(button).toHaveClass("bg-transparent");
        expect(button).toHaveClass("border-gray-900");
        expect(button).toHaveClass("text-gray-900");
    });

    test("applies outline styles with white background when 'outline' and 'white' props are true", () => {
        const { getByText } = render(<Button outline white>Outline White Button</Button>);
        const button = getByText("Outline White Button");
        expect(button).toHaveClass("bg-transparent");
        expect(button).toHaveClass("border-gray-50");
        expect(button).toHaveClass("text-gray-50");
    });

    test("applies black styles when 'black' prop is true", () => {
        const { getByText } = render(<Button black>Black Button</Button>);
        const button = getByText("Black Button");
        expect(button).toHaveClass("bg-gray-900");
        expect(button).toHaveClass("border-gray-900");
        expect(button).toHaveClass("text-gray-50");
        expect(button).toHaveClass("hover:bg-gray-950");
        expect(button).toHaveClass("hover:border-gray-950");
    });


    test("adds additional className when 'className' prop is provided", () => {
        const additionalClassName = "custom-class";
        const { getByText } = render(<Button className={additionalClassName}>Button with Additional Class</Button>);
        const button = getByText("Button with Additional Class");
        expect(button).toHaveClass(additionalClassName);
    });

    test("renders button without any text", () => {
        const { container } = render(<Button />);
        expect(container.firstChild).toBeInTheDocument();
    });

    test("renders button with additional className", () => {
        const { getByText } = render(
            <Button className="custom-class">Custom Button</Button>
        );
        const button = getByText("Custom Button");
        expect(button).toHaveClass("custom-class");
    });

    test("renders button with disabled state", () => {
        const { getByText } = render(
            <Button disabled>Disabled Button</Button>
        );
        const button = getByText("Disabled Button");
        expect(button).toBeDisabled();
    });

    test("renders button with aria-label", () => {
        const { getByLabelText } = render(
            <Button aria-label="Close Button">×</Button>
        );
        const closeButton = getByLabelText("Close Button");
        expect(closeButton).toBeInTheDocument();
    });

    test("calls onClick function with correct parameters", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={() => onClickMock("param1", "param2")}>Click me</Button>
        );
        const button = getByText("Click me");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledWith("param1", "param2");
    });

    test("does not call onClick function when disabled", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button disabled onClick={onClickMock}>Click me</Button>
        );
        const button = getByText("Click me");
        fireEvent.click(button);
        expect(onClickMock).not.toHaveBeenCalled();
    });

    test("responds to click events", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={onClickMock}>Click me</Button>
        );
        const button = getByText("Click me");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test("renders button with different size variation", () => {
        const { getByText } = render(
            <Button className="large-button">Large Button</Button>
        );
        const button = getByText("Large Button");
        expect(button).toHaveClass("large-button");
    });
});