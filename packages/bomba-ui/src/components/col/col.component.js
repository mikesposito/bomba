import React from 'react';

export const Col = (
	{
		className,
		children,
		xs,
		md,
		lg,
		xl,
	}
) => {
	return (
		<div className={`col-${xs} ${md ? `col-md-${md}` : ""} ${lg ? `col-lg-${lg}` : ""} ${xl ? `col-xl-${xl}` : ""} ${className}`}>
			{ children }
		</div>
	);
}