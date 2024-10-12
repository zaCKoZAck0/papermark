import { SVGProps } from "react";

export default function CadIcon({
  ...props
}: {
  props?: SVGProps<SVGSVGElement>;
}) {
  return (
    <svg
      width="576"
      height="576"
      viewBox="0 0 576 576"
      fill="none"
      style={{ width: "5rem", height: "5rem" }}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <rect x="57" y="59" width="454" height="462" fill="transparent" />
        <path
          opacity="0.999"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M77.5 31.5H497.5C521.833 37.8333 537.167 53.1667 543.5 77.5V497.5C537.167 521.833 521.833 537.167 497.5 543.5H77.5C53.1667 537.167 37.8333 521.833 31.5 497.5V77.5C37.8333 53.1667 53.1667 37.8333 77.5 31.5ZM168.092 126.004C178.391 115.754 192.33 110 206.861 110C221.392 110 235.331 115.754 245.631 126.004L245.658 126.031L266.605 146.978L266.674 147.047C266.698 147.071 266.721 147.094 266.744 147.117L303.972 184.345L323.411 164.901C323.855 164.314 324.344 163.75 324.88 163.214C325.414 162.68 325.977 162.191 326.564 161.748L360.251 128.053L360.254 128.051C371.802 116.505 387.464 110.02 403.794 110.022C420.123 110.024 435.784 116.513 447.329 128.061C458.874 139.61 465.359 155.272 465.357 171.601C465.355 187.931 458.866 203.591 447.318 215.137L413.652 248.808C413.206 249.4 412.713 249.969 412.173 250.508C411.635 251.047 411.067 251.539 410.476 251.985L391.045 271.418L428.233 308.607L428.289 308.662L428.34 308.712C428.375 308.748 428.41 308.783 428.445 308.819L449.356 329.73C470.801 351.175 470.801 385.878 449.356 407.323L407.323 449.356C385.878 470.801 351.175 470.801 329.73 449.356L271.427 391.054L231.546 430.942L231.527 430.961C225.924 436.545 219.037 440.669 211.468 442.971L211.456 442.975L141.083 464.315L141.046 464.326C136.882 465.578 132.457 465.679 128.241 464.619C124.025 463.559 120.174 461.377 117.097 458.305C114.02 455.234 111.833 451.386 110.766 447.172C109.699 442.957 109.793 438.532 111.038 434.367L111.058 434.301L132.414 363.944L132.427 363.901C134.748 356.331 138.893 349.448 144.497 343.856L144.51 343.843L184.359 303.985L126.031 245.658L126.004 245.631C115.754 235.331 110 221.392 110 206.861C110 192.33 115.754 178.391 126.004 168.092L126.031 168.064L168.064 126.031L168.092 126.004ZM400.748 216.455L424.691 192.509L424.694 192.507C430.24 186.962 433.356 179.44 433.357 171.597C433.358 163.755 430.244 156.233 424.699 150.686C419.154 145.14 411.632 142.023 403.79 142.022C395.947 142.021 388.425 145.136 382.878 150.681L358.929 174.636L400.748 216.455ZM336.304 197.266L378.123 239.084L208.935 408.297L208.924 408.308C207.033 410.19 204.709 411.58 202.157 412.356L145.991 429.388L163.021 373.281L163.026 373.264C163.812 370.711 165.213 368.389 167.104 366.503L167.122 366.485L336.304 197.266ZM255.361 180.989L281.347 206.975L206.983 281.355L148.686 223.058L148.674 223.046C144.399 218.744 142 212.926 142 206.861C142 200.796 144.4 194.977 148.675 190.675L148.686 190.664L190.664 148.686L190.675 148.675C194.977 144.4 200.796 142 206.861 142C212.926 142 218.744 144.399 223.046 148.674L223.058 148.686L232.733 158.361L211.714 179.38C205.466 185.629 205.466 195.759 211.714 202.008C217.962 208.256 228.093 208.256 234.341 202.008L255.361 180.989ZM294.053 368.425L368.419 294.047L394.398 320.027L373.379 341.045C367.131 347.294 367.131 357.424 373.379 363.673C379.628 369.921 389.758 369.921 396.007 363.673L417.026 342.654L426.729 352.357C435.677 361.305 435.677 375.748 426.729 384.696L384.696 426.729C375.748 435.677 361.305 435.677 352.357 426.729L294.053 368.425Z"
          fill="rgb(107 114 128)"
        />
      </g>
      <rect
        x="16"
        y="16"
        width="544"
        height="544"
        rx="48"
        stroke="transparent"
        strokeWidth="32"
      />
      <defs>
        <clipPath id="a">
          <rect
            x="32"
            y="32"
            width="512"
            height="512"
            rx="32"
            fill="rgb(107 114 128)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
