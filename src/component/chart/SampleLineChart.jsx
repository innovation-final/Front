import React, { useRef, useEffect, useState, useMemo } from 'react';

const XAXIS_PADDING = 10;
const YAXIS_PADDING = 25;
const DURATION = 1000 * 60 * 30; // 30m
const MAX_VALUE = 100;
const Y_TICK_COUNT = 5;

function SampleLineChart({ width, height }) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();

    const chartWidth = useMemo(() => {
        return width * 0.9;
    }, [width]);

    const chartHeight = useMemo(() => {
        return height * 0.85;
    }, [height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext('2d');
        context.strokestyle = 'black';
        context.lineWidth = 1;
        contextRef.current = context;
        setCtx(contextRef.current);
    }, [width, height]);

    console.log(chartWidth, chartHeight);

    useEffect(() => {
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(YAXIS_PADDING, 0);

            //draw Y축
            ctx.lineTo(YAXIS_PADDING, chartHeight);
            const yInterval = MAX_VALUE / (Y_TICK_COUNT - 1);
            ctx.textAlign = 'right';
            for (let i = 0; i < Y_TICK_COUNT; i++) {
                const value = i * yInterval;
                const yPoint =
                    chartHeight * 1.05 - (value / MAX_VALUE) * chartHeight;
                ctx.fillText(value, YAXIS_PADDING - 3, yPoint);
            }

            //draw X축
            ctx.lineTo(width, chartHeight);
            ctx.stroke();
        }
    }, [ctx, chartWidth, chartHeight]);

    const drawChart = () => {};

    const updateData = () => {};

    console.log('ctx :', ctx);
    return (
        <div className="canvas_wrap">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default SampleLineChart;
