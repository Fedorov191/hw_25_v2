import { Component } from 'react';
import Square from './Square.tsx';

type State = {
    selectedColor: string | null;
};

class Block extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedColor: null,
        };
    }

    handleClick = (color: string) => {
        this.setState((prevState) => ({
            selectedColor: prevState.selectedColor === null ? color : null,
        }));
    };

    render() {
        const { selectedColor } = this.state;
        const colors = ['red', 'green', 'blue', 'yellow'];

        return (
            <div className="block">
                {colors.map((color) => (
                    <Square
                        key={color}
                        originalColor={color}
                        currentColor={selectedColor ?? color}
                        onClick={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}

export default Block;
