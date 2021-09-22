import React from 'react';

export const Row = (
	{
		className,
		children,
	}
) => {
	return (
		<div className={`row ${className}`}>
			{ children }
		</div>
	);
}