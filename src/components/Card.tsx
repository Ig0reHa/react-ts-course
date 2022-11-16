import React, {FC, useState} from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	children: React.ReactNode;
	onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({
		width,
		height,
		variant,
	  onClick,
		children
	}) => {
	const [state, setState] = useState(0);

	return (
		<div style={{ width, height,
			padding: '20px',
			border: variant === CardVariant.outlined ? '2px solid black' : 'none',
			background: variant === CardVariant.primary ? 'gray' : ''
		}}
		onClick={() => onClick(state)}
		>
			{children}
		</div>
	);
};

export default Card;