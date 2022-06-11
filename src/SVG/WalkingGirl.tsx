import React from "react";
import { SvgXml } from "react-native-svg";

type WalkingGirlSVGProps = {
    width?: number,
}

const WalkingGirlSVG: React.FC<WalkingGirlSVGProps> = ({ width }) => {
    const xml = `
    <svg width="286" height="274" viewBox="0 0 286 274" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="141.5" cy="149.5" rx="125.5" ry="124.5" fill="#6A994E"/>
    <path d="M148.693 152.669C148.109 152.568 147.555 152.341 147.068 152.003C146.582 151.665 146.176 151.225 145.878 150.713C145.58 150.2 145.398 149.629 145.345 149.039C145.291 148.449 145.368 147.854 145.569 147.297L127.795 116.528L136.196 113.882L151.041 144.923C151.954 145.324 152.689 146.045 153.106 146.951C153.523 147.857 153.593 148.885 153.304 149.84C153.015 150.795 152.385 151.61 151.535 152.131C150.685 152.653 149.674 152.844 148.693 152.669L148.693 152.669Z" fill="#FFB8B8"/>
    <path d="M128.421 121.514C128.165 121.467 127.924 121.361 127.716 121.204C127.508 121.048 127.339 120.846 127.222 120.613L122.533 111.358C122.354 111.005 122.304 110.601 122.391 110.215C122.479 109.829 122.698 109.486 123.011 109.244L128.031 105.38C128.351 105.131 128.749 105.006 129.154 105.027C129.558 105.048 129.941 105.214 130.234 105.494L137.195 112.115C137.365 112.277 137.5 112.472 137.59 112.689C137.681 112.905 137.726 113.138 137.722 113.373C137.719 113.608 137.666 113.839 137.568 114.053C137.471 114.266 137.33 114.457 137.155 114.614L129.864 121.113C129.67 121.287 129.439 121.413 129.189 121.483C128.939 121.552 128.676 121.563 128.421 121.514H128.421Z" fill="#386641"/>
    <path d="M286 80.125C286 56.4281 266.807 0.196655 243.131 0.196655C219.455 0.196655 200.263 56.4281 200.263 80.125C200.261 85.7606 201.369 91.3414 203.522 96.5485C205.676 101.756 208.833 106.487 212.814 110.473C216.795 114.458 221.521 117.62 226.723 119.777C231.925 121.934 237.501 123.044 243.131 123.044C248.762 123.044 254.337 121.934 259.539 119.777C264.741 117.62 269.467 114.458 273.448 110.473C277.429 106.487 280.587 101.756 282.74 96.5485C284.894 91.3414 286.002 85.7606 286 80.125V80.125Z" fill="#386641"/>
    <path d="M243.131 210.621C243.225 210.621 243.314 210.584 243.381 210.518C243.447 210.451 243.484 210.362 243.484 210.268V36.2308C243.484 36.1372 243.447 36.0475 243.381 35.9813C243.314 35.9152 243.225 35.878 243.131 35.878C243.038 35.878 242.948 35.9152 242.882 35.9813C242.816 36.0475 242.779 36.1372 242.779 36.2308V210.268C242.779 210.362 242.816 210.451 242.882 210.518C242.948 210.584 243.038 210.621 243.131 210.621Z" fill="#3F3D56"/>
    <path d="M243.131 64.7896C243.178 64.7897 243.223 64.7805 243.266 64.7628C243.309 64.7451 243.348 64.719 243.381 64.6862L260.348 47.7038C260.413 47.6375 260.45 47.548 260.45 47.4547C260.449 47.3615 260.412 47.2722 260.346 47.2063C260.281 47.1404 260.191 47.1032 260.098 47.103C260.005 47.1027 259.916 47.1393 259.849 47.2049L242.882 64.1873C242.833 64.2367 242.799 64.2995 242.786 64.368C242.772 64.4364 242.779 64.5073 242.806 64.5718C242.832 64.6362 242.878 64.6913 242.935 64.7301C242.993 64.7689 243.062 64.7896 243.131 64.7896V64.7896Z" fill="#3F3D56"/>
    <path d="M243.131 94.1896C243.201 94.1895 243.269 94.1688 243.327 94.1301C243.385 94.0913 243.43 94.0362 243.457 93.9718C243.484 93.9073 243.491 93.8364 243.477 93.7679C243.463 93.6995 243.43 93.6366 243.381 93.5873L214.966 65.1469C214.899 65.0815 214.81 65.0449 214.717 65.0452C214.624 65.0455 214.535 65.0827 214.469 65.1485C214.403 65.2144 214.366 65.3037 214.366 65.3968C214.365 65.49 214.402 65.5795 214.467 65.6458L242.882 94.0862C242.915 94.119 242.954 94.145 242.996 94.1628C243.039 94.1805 243.085 94.1896 243.131 94.1896V94.1896Z" fill="#3F3D56"/>
    <path d="M268.826 220.216C268.765 220.263 268.7 220.306 268.639 220.352H216.083C215.054 216.176 214.69 211.996 216.228 208.365C218.42 203.192 224.906 199.963 230.063 202.184C231.284 202.725 232.349 203.568 233.155 204.633C235.171 201.023 238.785 198.301 242.958 198.304C248.185 198.307 252.532 202.586 253.95 207.529C256.234 203.67 260.746 200.973 265.155 202.133C272.53 204.073 274.86 215.549 268.826 220.216Z" fill="#F2F2F2"/>
    <path d="M61.6509 138.602C61.6509 121.574 47.8498 81.1673 30.8254 81.1673C13.801 81.1673 0 121.574 0 138.602C0.00617881 146.781 3.25658 154.622 9.0368 160.403C14.817 166.184 22.6541 169.432 30.8254 169.432C38.9968 169.432 46.8339 166.184 52.6141 160.403C58.3943 154.622 61.6447 146.781 61.6509 138.602V138.602Z" fill="#E6E6E6"/>
    <path d="M30.8254 213.613C30.8587 213.613 30.8917 213.607 30.9224 213.594C30.9532 213.581 30.9811 213.562 31.0046 213.539C31.0282 213.515 31.0468 213.487 31.0596 213.457C31.0723 213.426 31.0789 213.393 31.0789 213.36V107.061C31.0787 106.994 31.0518 106.929 31.0043 106.882C30.9568 106.835 30.8925 106.808 30.8254 106.808C30.7584 106.808 30.694 106.835 30.6465 106.882C30.599 106.929 30.5722 106.994 30.572 107.061V213.36C30.572 213.393 30.5785 213.426 30.5913 213.457C30.604 213.487 30.6227 213.515 30.6462 213.539C30.6698 213.562 30.6977 213.581 30.7285 213.594C30.7592 213.607 30.7922 213.613 30.8254 213.613V213.613Z" fill="#3F3D56"/>
    <path d="M30.8254 127.582C30.8587 127.583 30.8917 127.576 30.9225 127.563C30.9532 127.55 30.9812 127.532 31.0047 127.508L43.2053 115.305C43.2528 115.257 43.2795 115.193 43.2795 115.126C43.2794 115.058 43.2527 114.994 43.2052 114.946C43.1576 114.899 43.0932 114.872 43.026 114.872C42.9588 114.872 42.8944 114.899 42.8469 114.946L30.6462 127.15C30.6108 127.185 30.5866 127.23 30.5769 127.28C30.5671 127.329 30.5721 127.38 30.5913 127.426C30.6105 127.472 30.643 127.512 30.6847 127.54C30.7263 127.568 30.7753 127.583 30.8254 127.582L30.8254 127.582Z" fill="#3F3D56"/>
    <path d="M30.8254 148.709C30.8755 148.709 30.9245 148.694 30.9662 148.666C31.0079 148.638 31.0404 148.599 31.0595 148.552C31.0787 148.506 31.0838 148.455 31.074 148.406C31.0642 148.357 31.0401 148.311 31.0047 148.276L10.5725 127.839C10.525 127.792 10.4605 127.765 10.3933 127.765C10.3261 127.765 10.2617 127.791 10.2141 127.839C10.1666 127.887 10.1399 127.951 10.1398 128.018C10.1398 128.086 10.1665 128.15 10.214 128.198L30.6462 148.634C30.6697 148.658 30.6976 148.677 30.7284 148.689C30.7592 148.702 30.7921 148.709 30.8254 148.709V148.709Z" fill="#3F3D56"/>
    <path d="M49.1631 220.254C49.119 220.288 49.0727 220.319 49.0282 220.352H11.2375C10.4971 217.351 10.2356 214.347 11.3416 211.739C12.9175 208.021 17.5816 205.701 21.2896 207.297C22.168 207.685 22.9333 208.291 23.5134 209.057C24.9625 206.463 27.5618 204.506 30.5621 204.509C34.321 204.511 37.4463 207.586 38.4661 211.137C40.1086 208.365 43.3526 206.427 46.5233 207.26C51.8267 208.655 53.5018 216.9 49.1631 220.254Z" fill="#F2F2F2"/>
    <path d="M63.9786 220.352H198.281C198.374 220.352 198.464 220.315 198.53 220.249C198.596 220.183 198.633 220.093 198.633 219.999C198.633 219.906 198.596 219.816 198.53 219.75C198.464 219.684 198.374 219.647 198.281 219.647H63.9786C63.8851 219.647 63.7954 219.684 63.7293 219.75C63.6632 219.816 63.6261 219.906 63.6261 219.999C63.6261 220.093 63.6632 220.183 63.7293 220.249C63.7954 220.315 63.8851 220.352 63.9786 220.352V220.352Z" fill="#3F3D56"/>
    <path d="M127.553 123.739C127.298 123.684 127.06 123.571 126.857 123.409C126.653 123.248 126.49 123.041 126.38 122.805L121.947 113.424C121.778 113.066 121.739 112.661 121.837 112.277C121.935 111.894 122.164 111.557 122.484 111.324L127.608 107.6C127.934 107.36 128.336 107.246 128.74 107.278C129.143 107.31 129.522 107.487 129.806 107.775L136.582 114.585C136.748 114.752 136.877 114.951 136.962 115.17C137.047 115.389 137.086 115.623 137.075 115.858C137.065 116.092 137.006 116.322 136.903 116.533C136.799 116.744 136.653 116.931 136.473 117.082L129.006 123.378C128.808 123.546 128.574 123.666 128.322 123.728C128.069 123.791 127.806 123.794 127.553 123.739V123.739Z" fill="#386641"/>
    <path d="M99.4679 212.679L103.928 213.894L110.73 197.255L104.148 195.462L99.4679 212.679Z" fill="#FFB8B8"/>
    <path d="M111.402 220.381L97.3856 216.564L98.859 211.144L107.812 213.582C109.155 213.947 110.297 214.832 110.989 216.041C111.68 217.25 111.863 218.684 111.497 220.029L111.402 220.381V220.381Z" fill="#2F2E41"/>
    <path d="M137.593 216.085L142.215 216.085L144.414 198.242L137.592 198.242L137.593 216.085Z" fill="#FFB8B8"/>
    <path d="M151.129 220.38L136.603 220.381L136.603 214.764L145.881 214.763C147.272 214.763 148.607 215.316 149.591 216.301C150.576 217.286 151.128 218.622 151.129 220.015L151.129 220.38V220.38Z" fill="#2F2E41"/>
    <path d="M137.178 95.5626C140.794 91.9435 140.794 86.0756 137.178 82.4564C133.562 78.8372 127.699 78.8372 124.083 82.4564C120.467 86.0756 120.467 91.9435 124.083 95.5626C127.699 99.1818 133.562 99.1818 137.178 95.5626Z" fill="#FFB8B8"/>
    <path d="M136.195 201.895L131.02 164.017C130.981 163.736 130.854 163.475 130.655 163.272C130.457 163.069 130.199 162.936 129.919 162.892C129.638 162.848 129.352 162.895 129.101 163.026C128.849 163.158 128.647 163.367 128.524 163.622L110.91 200.188C110.731 200.556 110.426 200.847 110.051 201.008C109.675 201.17 109.255 201.191 108.865 201.068L102.077 198.894C101.657 198.761 101.305 198.469 101.097 198.08C100.888 197.691 100.84 197.236 100.962 196.812C109.218 167.636 116.347 145.929 124.302 134.826C124.333 134.783 124.366 134.742 124.4 134.702L126.164 132.642C126.323 132.455 126.521 132.306 126.743 132.204C126.965 132.101 127.207 132.049 127.452 132.049H140.44C140.779 132.048 141.111 132.149 141.392 132.339C141.673 132.53 141.89 132.8 142.015 133.116L142.354 133.963C142.381 134.031 142.404 134.1 142.422 134.171C146.668 150.345 147.769 171.825 145.887 201.77C145.859 202.201 145.668 202.606 145.354 202.902C145.039 203.197 144.624 203.363 144.192 203.363H137.876C137.466 203.362 137.071 203.213 136.762 202.943C136.453 202.673 136.252 202.301 136.195 201.895Z" fill="#2F2E41"/>
    <path d="M123.675 134.057C121.803 131.06 112.875 115.576 120.889 105.089C121.033 104.904 121.126 104.684 121.158 104.451L121.476 102.013C121.505 101.785 121.58 101.565 121.697 101.367C121.814 101.169 121.969 100.997 122.154 100.861C122.34 100.726 122.55 100.629 122.774 100.577C122.998 100.525 123.23 100.519 123.456 100.56C126.241 101.067 131.489 102.663 135.332 107.646C135.515 107.886 135.631 108.17 135.667 108.47L135.879 110.169C135.906 110.392 135.99 110.605 136.122 110.786C136.255 110.967 136.433 111.111 136.638 111.204C139.089 112.318 144.573 116.658 142.574 132.861C142.526 133.265 142.334 133.637 142.035 133.911C141.735 134.185 141.347 134.342 140.942 134.353L125.165 134.852C125.147 134.852 125.13 134.852 125.112 134.852C124.825 134.852 124.542 134.779 124.291 134.64C124.039 134.501 123.827 134.3 123.675 134.057V134.057Z" fill="#386641"/>
    <path d="M117.276 158.89C116.876 158.454 116.575 157.935 116.397 157.37C116.218 156.805 116.165 156.207 116.242 155.62C116.319 155.032 116.524 154.469 116.842 153.969C117.16 153.469 117.584 153.045 118.083 152.727L122.797 117.5L131.063 120.544L123.864 154.195C124.342 155.07 124.483 156.091 124.26 157.063C124.037 158.035 123.466 158.892 122.654 159.471C121.842 160.05 120.846 160.31 119.855 160.203C118.864 160.096 117.946 159.629 117.276 158.89V158.89Z" fill="#FFB8B8"/>
    <path d="M120.249 121.83C120.076 121.636 119.949 121.405 119.88 121.154C119.811 120.903 119.801 120.639 119.85 120.384L121.788 110.189C121.862 109.801 122.07 109.45 122.374 109.198C122.679 108.946 123.062 108.808 123.457 108.809L129.79 108.82C130.195 108.819 130.587 108.963 130.894 109.227C131.201 109.491 131.404 109.857 131.464 110.258L132.933 119.756C132.969 119.988 132.956 120.225 132.896 120.452C132.835 120.679 132.729 120.891 132.582 121.074C132.436 121.258 132.253 121.409 132.045 121.518C131.838 121.628 131.609 121.693 131.375 121.709L121.636 122.395C121.377 122.414 121.117 122.373 120.876 122.275C120.636 122.177 120.421 122.025 120.249 121.83L120.249 121.83Z" fill="#386641"/>
    <path d="M120.443 83.2458C121.131 81.1592 121.638 79.0174 121.96 76.8439C122.062 75.5785 121.738 74.217 120.817 73.3439C119.094 71.71 116.167 72.4882 114.365 74.0346C111.761 76.2694 110.462 79.7038 109.971 83.1019C109.48 86.4999 109.696 89.9554 109.578 93.3867C109.46 96.8181 108.969 100.346 107.222 103.301C105.474 106.255 102.23 108.523 98.8092 108.271C97.4284 108.197 96.1172 107.64 95.1032 106.699C94.6054 106.225 94.2284 105.639 94.0039 104.989C93.7793 104.339 93.7137 103.645 93.8125 102.964C92.064 106.098 92.9503 110.345 95.5585 112.809C98.1666 115.273 102.178 115.969 105.607 114.917C109.036 113.865 111.858 111.228 113.544 108.06C115.229 104.892 115.847 101.232 115.757 97.6435C115.689 94.8879 115.221 92.1098 115.686 89.3931C116.151 86.6763 117.85 83.9178 120.529 83.278L120.443 83.2458Z" fill="#2F2E41"/>
    <path d="M129.1 97.6251C128.736 97.0483 128.501 96.3999 128.41 95.724C128.319 95.0482 128.375 94.3607 128.574 93.7083C128.772 93.0559 129.109 92.454 129.561 91.9435C130.012 91.433 130.569 91.0259 131.192 90.7499C132.87 90.0062 134.812 90.2907 136.614 89.9377C139.842 89.3053 142.5 86.354 142.692 83.0673C142.883 79.7805 140.514 76.4956 137.312 75.7407C136.035 75.4396 134.703 75.5105 133.393 75.583C132.134 75.6528 130.875 75.7226 129.623 75.8662C127.145 76.1504 124.639 76.7509 122.577 78.1548C120.515 79.5586 118.958 81.8833 118.985 84.3792C119.015 87.2279 120.357 92.8987 122.224 95.0493C124.025 97.1242 125.397 97.8718 128.255 98.0132L129.1 97.6251Z" fill="#2F2E41"/>
    <path d="M163.917 131.81H159.567V127.457C159.567 127.317 159.512 127.182 159.413 127.083C159.313 126.984 159.179 126.928 159.039 126.928C158.899 126.928 158.764 126.984 158.665 127.083C158.566 127.182 158.51 127.317 158.51 127.457V131.81H154.161C154.021 131.81 153.886 131.866 153.787 131.965C153.688 132.065 153.632 132.199 153.632 132.34C153.632 132.48 153.688 132.615 153.787 132.714C153.886 132.813 154.021 132.869 154.161 132.869H158.51V137.222C158.51 137.362 158.566 137.497 158.665 137.596C158.764 137.695 158.899 137.751 159.039 137.751C159.179 137.751 159.313 137.695 159.413 137.596C159.512 137.497 159.567 137.362 159.567 137.222V132.869H163.917C164.057 132.869 164.191 132.813 164.29 132.714C164.39 132.615 164.445 132.48 164.445 132.34C164.445 132.199 164.39 132.065 164.29 131.965C164.191 131.866 164.057 131.81 163.917 131.81Z" fill="#386641"/>
    <path d="M151.579 64.423H147.23V60.07C147.23 59.9296 147.174 59.795 147.075 59.6958C146.976 59.5965 146.841 59.5408 146.701 59.5408C146.561 59.5408 146.426 59.5965 146.327 59.6958C146.228 59.795 146.172 59.9296 146.172 60.07V64.423H141.823C141.683 64.423 141.549 64.4787 141.449 64.578C141.35 64.6772 141.295 64.8118 141.295 64.9522C141.295 65.0925 141.35 65.2272 141.449 65.3264C141.549 65.4257 141.683 65.4814 141.823 65.4814H146.172V69.8344C146.172 69.9747 146.228 70.1093 146.327 70.2086C146.426 70.3078 146.561 70.3636 146.701 70.3636C146.841 70.3636 146.976 70.3078 147.075 70.2086C147.174 70.1093 147.23 69.9747 147.23 69.8344V65.4814H151.579C151.719 65.4814 151.854 65.4257 151.953 65.3264C152.052 65.2272 152.108 65.0925 152.108 64.9522C152.108 64.8118 152.052 64.6772 151.953 64.578C151.854 64.4787 151.719 64.423 151.579 64.423Z" fill="#386641"/>
    <path d="M95.1792 84.1805H90.8301V79.8276C90.8301 79.6872 90.7744 79.5526 90.6753 79.4533C90.5761 79.3541 90.4416 79.2983 90.3014 79.2983C90.1611 79.2983 90.0266 79.3541 89.9275 79.4533C89.8283 79.5526 89.7726 79.6872 89.7726 79.8276V84.1805H85.4235C85.2833 84.1805 85.1488 84.2363 85.0496 84.3355C84.9505 84.4348 84.8948 84.5694 84.8948 84.7098C84.8948 84.8501 84.9505 84.9847 85.0496 85.084C85.1488 85.1832 85.2833 85.239 85.4235 85.239H89.7726V89.5919C89.7726 89.7323 89.8283 89.8669 89.9275 89.9662C90.0266 90.0654 90.1611 90.1212 90.3014 90.1212C90.4416 90.1212 90.5761 90.0654 90.6753 89.9662C90.7744 89.8669 90.8301 89.7323 90.8301 89.5919V85.239H95.1792C95.3194 85.239 95.4539 85.1832 95.5531 85.084C95.6523 84.9847 95.708 84.8501 95.708 84.7098C95.708 84.5694 95.6523 84.4348 95.5531 84.3355C95.4539 84.2363 95.3194 84.1805 95.1792 84.1805V84.1805Z" fill="#386641"/>
    </svg>    
    `;

    return (
        <SvgXml xml={xml} height={width} width={width}/>
    );
};

export default WalkingGirlSVG;