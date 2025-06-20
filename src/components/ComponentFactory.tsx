import React from 'react';
import { RMGText } from './RMGText';
import { RMGButton } from './RMGButton';
import { RMGInput } from './RMGInput';
import { RMGHeader } from './RMGHeader'
import { RMGImage } from './RMGImage'


interface ComponentConfig {
    component: string;
    props?: any;
    children?: ComponentConfig[];
}

interface ComponentFactoryProps {
    config: ComponentConfig;
}


export const ComponentFactory = ({ config }: ComponentFactoryProps) => {
    if (!config || typeof config !== 'object' || config === null) {
        return null;
    }
    const { component, props = {}, children = [] } = config;
    const childElements = Array.isArray(children) ? children.map((child, index) => (
        <React.Fragment key={index}>
            {<ComponentFactory config={child} />}
        </React.Fragment>
    )) : null;
    switch (component) {
        case "RMGText":
            return <RMGText {...props} />;
        case "RMGButton":
            return <RMGButton {...props} />;
        case "RMGHeader":
            return <RMGHeader {...props} children={childElements} />;
        case "RMGImage":
            return <RMGImage {...props} />;
        case "RMGInput":
            return <RMGInput {...props} />;
        default:
            return null;
    }
}