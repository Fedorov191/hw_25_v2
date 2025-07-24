import { Component } from 'react';

type Props = {
    originalColor: string;
    currentColor: string;
    onClick: (color: string) => void;
};

class Square extends Component<Props> {
    render() {
        const { originalColor, currentColor, onClick } = this.props;

        return (
            <div
                className="square"
                style={{ backgroundColor: currentColor }}
                onClick={() => onClick(originalColor)}
            />
        );
    }
}

export default Square;
