import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import legend from 'd3-svg-legend'
import { scaleLinear, scaleQuantize } from "d3-scale";


/* Component */
export const Legend = () => {
    const d3Container = useRef(null);
    const formatter = d3.format(".2%")
    useEffect(
        () => {
            if (d3Container.current) {
                const svg = d3.select(d3Container.current);

                const colorScale = scaleQuantize()
                .domain([4.55*.01, 6.98*.01])
                .range([
                  "#feedde",
                  "#fdbe85",
                  "#fd8d3c",
                  "#e6550d",
                  "#a63603",
                ]);
              svg.append("g")
                .attr("class", "legend")
                .attr("transform", "translate(20,40)");

              var legendLinear = legend.legendColor()
              .labelFormat(formatter)
              .title("Estimated Percent Dead")
                .scale(colorScale);
              
              svg.select(".legend")
                .call(legendLinear);
            }
                
        },

        [d3Container.current])

    return (
        <svg
            className="d3-component"
            width={200}
            height={200}
            ref={d3Container}
        />
    );
}