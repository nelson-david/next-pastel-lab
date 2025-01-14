import { IconProps } from "@/app/types";

const PlusIcon = ({ color, size }: IconProps) => {
    return (
        <>
            <svg
                fill={color ? color : "#000000"}
                width={size ? size.width : "18"}
                height={size ? size.height : "18"}
                viewBox="0 0 1920 1920"
            >
                <path
                    d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z"
                    fillRule="evenodd"
                />
            </svg>
        </>
    );
};

export default PlusIcon;
