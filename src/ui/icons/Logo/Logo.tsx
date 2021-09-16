import React, { FC } from 'react'
import { Icon, IconProps } from 'ui/icons'

const Logo: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  color,
  ...props
}) => (
  <Icon
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    {...props}
  >
    <g clipPath='url(#clip0)'>
      <path fillRule='evenodd' clipRule='evenodd' d='M15.8069 50.4317C8.54046 48.9784 -0.179255 35.8988 0.0283569 28.4248C0.235969 16.3833 10.409 5.17226 21.4124 2.26569C33.4539 -1.0561 40.0975 -1.47132 51.7238 5.37987C58.9903 9.73973 62.9349 12.6463 63.1425 14.5148C64.5958 26.3487 66.8795 15.7605 67.71 27.1791C67.71 29.2553 66.6719 34.2379 66.0491 36.7293C63.973 49.3936 50.4782 58.7362 38.6442 59.7742C25.9799 61.0199 23.2809 53.1306 15.8069 50.4317ZM8.33285 34.0303C5.01105 29.2553 8.12524 26.3487 9.37091 22.4041C11.0318 17.2138 16.6373 15.9681 20.582 12.4387C22.0353 10.9854 21.4124 8.49406 22.6581 7.24838C23.2809 6.83316 33.6616 6.83316 33.6616 6.83316C38.229 8.28644 35.7377 12.0235 40.928 8.70167C42.5889 7.66361 61.8968 25.7259 60.2359 30.2933C59.1979 34.0303 56.7065 40.0511 54.4228 43.1653C47.7792 53.1306 34.9072 53.9611 25.9799 45.6566C22.8657 42.75 15.8069 41.9196 13.7308 39.4283C12.9003 38.3902 9.57852 34.8608 8.33285 34.0303ZM35.1148 32.9923C34.0768 33.6151 33.2463 34.0303 32.0007 33.6151C31.1702 33.4075 30.1321 33.1999 29.7169 32.5771C29.3017 31.7466 29.5093 31.1238 29.0941 30.7085C29.0941 30.5009 29.9245 27.802 30.1321 27.3868C30.3398 25.103 37.3986 23.0269 38.8519 25.7259C39.0595 25.9335 39.8899 28.6324 39.8899 28.84C39.8899 29.0476 39.6823 29.6705 39.6823 29.6705C39.4747 30.0857 39.4747 29.8781 39.6823 30.2933C39.6823 30.5009 39.2671 31.9542 39.2671 31.9542C39.0595 32.3694 37.6062 32.9923 37.3986 32.9923C36.9834 32.9923 36.5681 32.5771 36.1529 32.7847H35.9453C35.9453 32.7847 35.3225 32.9923 35.1148 32.9923Z' fill='#8FC74A'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M18.2908 21.1763C21.6126 21.3839 25.5573 24.4981 28.8791 24.4981C31.578 24.4981 25.9725 29.2732 25.5573 30.1036C24.9344 31.5569 12.2701 27.6123 8.53304 28.2351C7.9102 28.4427 5.83408 28.6503 5.62646 28.6503C4.79601 28.2351 4.79601 23.0448 5.41885 21.3839C6.66453 18.0621 8.74065 19.1002 12.0625 19.9306C13.931 20.5534 16.2147 21.1763 18.2908 21.1763Z' fill='#FFCC29'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M21.405 40.2769C22.6507 37.7855 24.9345 36.1246 25.7649 33.4257C26.1801 31.7648 36.3532 35.0866 31.9933 35.5018C30.3324 35.7094 24.3116 45.8825 24.104 48.9967C24.104 49.4119 23.8964 51.2804 23.6888 51.488C22.8583 52.1108 16.8376 47.9586 15.3843 46.5053C15.1767 46.2977 19.9518 43.3911 21.405 40.2769Z' fill='#0098DA'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M49.8479 41.1072C46.9414 40.0692 42.9967 35.9169 39.8825 35.0865C36.5607 34.256 40.9206 33.6332 41.3358 31.9723C41.751 29.6886 58.9829 36.955 61.4742 39.4463C62.0971 40.2768 60.8514 42.7681 59.3981 44.8442C56.9068 48.9965 56.0763 47.128 53.7926 44.8442C52.3393 43.391 51.5088 41.7301 49.8479 41.1072Z' fill='#373435'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M36.1455 14.3253C37.3911 17.6471 36.3531 21.3842 38.014 24.706C39.2597 27.4049 34.0693 24.0831 33.0313 24.0831C31.1628 24.2907 29.0867 12.8721 26.5953 9.55026C26.3877 9.13503 25.142 5.60563 24.9344 5.39801C23.6887 2.28383 31.7856 2.07622 34.4846 3.11428C34.6922 3.11428 34.277 10.1731 36.1455 14.3253Z' fill='#BFD73E'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M42.1663 29.0656C39.4673 31.557 42.1663 25.9514 41.751 24.7058C41.1282 22.422 42.9967 22.422 46.1109 18.0621C46.5261 17.6469 54.4154 13.4947 54.8307 13.4947C57.322 13.0794 62.3047 19.9307 59.6058 21.384C54.2078 24.2905 42.5815 28.6504 42.1663 29.0656Z' fill='#ED3237'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M163.204 35.917C162.789 36.5398 162.374 37.3703 161.751 37.9931C160.505 39.4464 158.845 40.0692 156.768 40.0692H154.692C153.239 40.0692 152.201 40.4845 151.37 41.5225C150.332 42.353 149.917 43.391 149.917 44.8443H156.768C160.09 44.8443 162.789 43.5987 165.281 41.3149C167.564 39.0312 168.602 36.1246 168.602 33.0104V27.6125C168.81 27.1973 168.81 26.7821 168.81 26.5744V16.1938C167.564 16.1938 166.319 16.609 165.488 17.4395C164.45 18.4776 164.035 19.5156 164.035 20.7613V26.5744C164.035 28.2353 163.412 29.6886 162.166 31.1419C160.921 32.3876 159.26 33.0104 157.391 33.0104C155.73 33.0104 154.069 32.3876 152.824 31.1419C151.578 29.8962 150.955 28.2353 150.955 26.5744V20.7613C150.955 19.5156 150.332 18.4776 149.502 17.4395C148.672 16.609 147.426 16.1938 146.18 16.1938V26.5744C146.18 29.481 147.218 31.9724 149.502 34.2561C151.786 36.3322 154.485 37.3703 157.391 37.3703C159.675 37.3703 161.543 36.9551 163.204 35.917ZM180.851 24.7059H189.571C189.571 25.9516 188.948 26.9897 188.118 28.0277C187.08 28.8582 186.042 29.2734 184.796 29.2734H180.851C180.229 29.2734 179.606 29.0658 179.191 28.6506C178.568 28.2353 178.36 27.6125 178.36 26.9897C178.36 26.3668 178.568 25.744 179.191 25.3288C179.606 24.9135 180.021 24.7059 180.851 24.7059ZM182.512 38.8236C179.191 38.8236 176.284 37.7855 174 35.5018C171.717 33.218 170.471 30.3115 170.471 26.9897C170.471 23.6679 171.717 20.9689 174 18.6852C176.284 16.4014 179.191 15.1558 182.512 15.1558H189.571C189.571 16.4014 188.948 17.6471 188.118 18.4776C187.08 19.5156 186.042 19.9308 184.796 19.9308H182.512C180.436 19.9308 178.775 20.5537 177.53 22.007C176.076 23.4603 175.454 25.1212 175.454 26.9897C175.454 29.0658 176.076 30.7267 177.53 31.9724C178.775 33.4256 180.436 34.2561 182.512 34.2561H184.796C186.042 34.2561 187.08 34.6713 188.118 35.5018C188.948 36.5398 189.571 37.5779 189.571 38.8236H182.512ZM211.993 20.1385C211.993 18.6852 211.578 17.6471 210.54 16.609C209.71 15.571 208.464 15.1558 207.011 15.1558V24.7059H196.007V20.1385C196.007 18.6852 195.592 17.6471 194.554 16.609C193.516 15.571 192.478 15.1558 191.024 15.1558V33.8409C191.024 35.2942 191.44 36.5398 192.478 37.3703C193.516 38.4083 194.554 38.8236 196.007 38.8236V29.2734H207.011V33.8409C207.011 35.2942 207.633 36.5398 208.464 37.3703C209.502 38.4083 210.748 38.8236 211.993 38.8236V20.1385ZM79.9518 38.8236H74.9691V15.1558C76.4224 15.1558 77.6681 15.571 78.4985 16.609C79.5366 17.6471 79.9518 18.6852 79.9518 20.1385V24.9135H86.5954C88.4639 24.9135 90.1248 24.2907 91.5781 22.8374C93.0314 21.3841 93.6542 19.7232 93.6542 17.6471V15.571H98.6369V17.6471C98.6369 19.7232 98.2217 21.3841 97.3913 23.045C96.3532 24.7059 95.3151 26.1592 93.6542 27.1973C95.3151 28.443 96.3532 29.8962 97.3913 31.5571C98.2217 33.218 98.6369 34.8789 98.6369 36.7474V38.8236H93.6542V36.7474C93.6542 34.8789 93.0314 33.218 91.5781 31.7647C90.1248 30.3115 88.4639 29.6886 86.5954 29.6886H79.9518V38.8236ZM109.848 24.7059H118.568C118.568 25.9516 118.153 26.9897 117.114 28.0277C116.284 28.8582 115.038 29.2734 113.793 29.2734H109.848C109.225 29.2734 108.602 29.0658 108.187 28.6506C107.772 28.2353 107.564 27.6125 107.564 26.9897C107.564 26.3668 107.772 25.744 108.187 25.3288C108.602 24.9135 109.225 24.7059 109.848 24.7059ZM111.509 38.8236C108.187 38.8236 105.488 37.7855 102.997 35.5018C100.713 33.218 99.4674 30.3115 99.4674 26.9897C99.4674 23.6679 100.713 20.9689 102.997 18.6852C105.488 16.4014 108.187 15.1558 111.509 15.1558H118.568C118.568 16.4014 118.153 17.6471 117.114 18.4776C116.284 19.5156 115.038 19.9308 113.793 19.9308H111.509C109.64 19.9308 107.979 20.5537 106.526 22.007C105.281 23.4603 104.45 25.1212 104.45 26.9897C104.45 29.0658 105.281 30.7267 106.526 31.9724C107.979 33.4256 109.64 34.2561 111.509 34.2561H113.793C115.038 34.2561 116.284 34.6713 117.114 35.5018C118.153 36.5398 118.568 37.5779 118.568 38.8236H111.509ZM125.211 34.2561V26.9897C125.211 25.1212 125.834 23.4603 127.08 22.007C128.533 20.5537 130.194 19.9308 132.063 19.9308C134.139 19.9308 135.8 20.5537 137.045 22.007C138.499 23.4603 139.121 25.1212 139.121 26.9897C139.121 29.0658 138.499 30.7267 137.045 32.18C135.8 33.4256 134.139 34.2561 132.063 34.2561H125.211ZM125.004 39.8616V38.8236H132.063C135.384 38.8236 138.291 37.7855 140.575 35.5018C143.066 33.218 144.104 30.3115 144.104 26.9897C144.104 23.6679 143.066 20.9689 140.575 18.6852C138.291 16.4014 135.384 15.1558 132.063 15.1558C128.741 15.1558 126.042 16.4014 123.758 18.6852C121.267 20.9689 120.021 23.6679 120.021 26.9897V44.8443C121.474 44.8443 122.72 44.4291 123.55 43.391C124.588 42.353 125.004 41.1073 125.004 39.8616Z' fill='#8FC74A'/>
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='212.014' height='60' fill='white'/>
      </clipPath>
    </defs>
  </Icon>
)

Logo.defaultProps = {
  originalWidth: 213,
  originalHeight: 60,
  width: 213,
  height: 60,
}

export default Logo