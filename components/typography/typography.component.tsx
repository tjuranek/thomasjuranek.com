import React from 'react';

export function Typography(props: Props) {
    const { additionalClassNames, children, variant } = props;

    return React.createElement(
        variant,
        {
            className: additionalClassNames,
        },
        children
    );
}

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface Props {
    additionalClassNames?: string;
    children: React.ReactNode;
    variant: Variant; 
}

