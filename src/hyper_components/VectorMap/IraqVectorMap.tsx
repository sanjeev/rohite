import React from 'react';
import 'jsvectormap';
import 'assets/hyper/scripts/iraq';
import useVectorMap from './useVectorMap';

type IraqVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const IraqVectorMap = ({ width, height, options }: IraqVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'iraq');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default IraqVectorMap;
