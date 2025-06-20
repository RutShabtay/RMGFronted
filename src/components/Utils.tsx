export const generateJSXFromConfig = (config: any, indent: number = 0): string => {
    if (!config || typeof config !== 'object') return '';

    const { component, props = {}, children = [] } = config;
    const pad = '  '.repeat(indent);

    const propsString = Object.entries(props)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join(' ');

    const childrenString = Array.isArray(children)
        ? children.map(child => generateJSXFromConfig(child, indent + 1)).join('\n')
        : '';

    if (childrenString) {
        return `${pad}<${component} ${propsString}>\n${childrenString}\n${pad}</${component}>`;
    } else {
        return `${pad}<${component} ${propsString} />`;
    }
};



export const downloadCode = (fileName: string, code: string): void => {
    const blob: Blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
};

