
import React from "react";
import { SvgXml } from "react-native-svg";

type WalkingManSVGProps = {
    width?: number,
}

const WalkingManSVG: React.FC<WalkingManSVGProps> = ({ width }) => {
    const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="649.67538" height="618.61588" viewBox="0 0 649.67538 618.61588" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M646.0775,716.45072A25.47685,25.47685,0,0,1,620.951,695.17025l-.00812-.04908.03176-.03824a24.5989,24.5989,0,0,0,3.90509-6.49889,16.56589,16.56589,0,0,1-4.07431,3.72641l-.15967.10644-.00929-.19174c-.02034-.42194-.0307-.84123-.0307-1.24607a25.32735,25.32735,0,0,1,12.01251-21.62774A36.00435,36.00435,0,1,1,692.78479,633.103l.03208.09677-.09449.03824a17.70413,17.70413,0,0,1-6.86539,1.4461,24.58732,24.58732,0,0,0,7.56655.91485l.08785-.003.0213.08531a36.138,36.138,0,0,1,1.07361,8.75105q0,.15966-.00138.31912a16.32471,16.32471,0,0,0,5.39124,12.17163,25.46854,25.46854,0,0,1-1.18839,38.69336l-.05216.042-.061-.02762c-3.76583-1.7087-6.38847-3.616-8.17477-5.95776a24.9737,24.9737,0,0,0,5.18781,7.92566l.09662.09964-.11983.07a25.49252,25.49252,0,0,1-25.13489.299A25.56492,25.56492,0,0,1,646.0775,716.45072Z" transform="translate(-275.16231 -140.69206)" fill="#f2f2f2"/><path d="M637.00291,757.02381a.46277.46277,0,0,1-.4576-.39757,154.95,154.95,0,0,1-.21588-32.48774c1.59734-17.04819,6.72706-41.60359,22.09369-61.77055a.46281.46281,0,1,1,.73623.561c-15.23391,19.99281-20.32227,44.368-21.90836,61.29585a153.902,153.902,0,0,0,.21069,32.271.46318.46318,0,0,1-.45877.528Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/><path d="M644.68464,689.03426a.46279.46279,0,0,1-.27245-.83716,63.78463,63.78463,0,0,1,14.08148-7.16824c7.769-2.84428,19.58292-5.42281,31.74515-1.552a.46274.46274,0,1,1-.28067.8819c-11.913-3.79126-23.51282-1.25537-31.14624,1.53935a62.7371,62.7371,0,0,0-13.85557,7.04772A.461.461,0,0,1,644.68464,689.03426Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/><circle cx="136.44399" cy="80.93786" r="45" fill="#ff6584"/><path d="M408.03938,245.19206h-5.75592v-35.441a18.05907,18.05907,0,0,0-18.05908-18.059H359.28346v-51h-4v51h-34v53.5h-33.5v513h188V312.93614A67.7441,67.7441,0,0,0,408.03938,245.19206Z" transform="translate(-275.16231 -140.69206)" fill="#f2f2f2"/><path d="M580.248,557.69206h-4.96454v-6.941a18.04439,18.04439,0,0,0-17-18.00555V485.69206h-4v47h-18v25h-64v201h142V591.72746A34.0354,34.0354,0,0,0,580.248,557.69206Z" transform="translate(-275.16231 -140.69206)" fill="#f2f2f2"/><path d="M854.28346,413.79979V401.75108a18.04439,18.04439,0,0,0-17-18.00555V336.69206h-4v47h-18v30h-85v345h188V481.43614A67.743,67.743,0,0,0,854.28346,413.79979Z" transform="translate(-275.16231 -140.69206)" fill="#f2f2f2"/><rect x="486.12116" y="322" width="25" height="20" fill="#fff"/><rect x="527.12116" y="322" width="25" height="20" fill="#fff"/><rect x="568.12116" y="322" width="25" height="20" fill="#fff"/><rect x="486.12116" y="373" width="25" height="20" fill="#fff"/><rect x="527.12116" y="373" width="25" height="20" fill="#fff"/><rect x="568.12116" y="373" width="25" height="20" fill="#fff"/><rect x="486.12116" y="424" width="25" height="20" fill="#fff"/><rect x="527.12116" y="424" width="25" height="20" fill="#fff"/><rect x="568.12116" y="424" width="25" height="20" fill="#fff"/><rect x="486.12116" y="475" width="25" height="20" fill="#fff"/><rect x="527.12116" y="475" width="25" height="20" fill="#fff"/><rect x="568.12116" y="475" width="25" height="20" fill="#fff"/><rect x="486.12116" y="526" width="25" height="20" fill="#fff"/><rect x="527.12116" y="526" width="25" height="20" fill="#fff"/><rect x="568.12116" y="526" width="25" height="20" fill="#fff"/><rect x="486.12116" y="577" width="25" height="20" fill="#fff"/><rect x="527.12116" y="577" width="25" height="20" fill="#fff"/><rect x="568.12116" y="577" width="25" height="20" fill="#fff"/><rect x="66.12116" y="145" width="81" height="6" fill="#fff"/><rect x="66.12116" y="182" width="81" height="6" fill="#fff"/><rect x="66.12116" y="219" width="81" height="6" fill="#fff"/><rect x="66.12116" y="256" width="81" height="6" fill="#fff"/><rect x="66.12116" y="293" width="81" height="6" fill="#fff"/><rect x="66.12116" y="330" width="81" height="6" fill="#fff"/><rect x="66.12116" y="367" width="81" height="6" fill="#fff"/><rect x="66.12116" y="404" width="81" height="6" fill="#fff"/><rect x="66.12116" y="441" width="81" height="6" fill="#fff"/><rect x="66.12116" y="478" width="81" height="6" fill="#fff"/><rect x="66.12116" y="515" width="81" height="6" fill="#fff"/><rect x="66.12116" y="552" width="81" height="6" fill="#fff"/><rect x="214.62116" y="444" width="25" height="20" fill="#fff"/><rect x="255.62116" y="444" width="25" height="20" fill="#fff"/><rect x="296.62116" y="444" width="25" height="20" fill="#fff"/><rect x="215.12116" y="495" width="25" height="20" fill="#fff"/><rect x="256.12116" y="495" width="25" height="20" fill="#fff"/><rect x="297.12116" y="495" width="25" height="20" fill="#fff"/><rect x="215.62116" y="546" width="25" height="20" fill="#fff"/><rect x="256.62116" y="546" width="25" height="20" fill="#fff"/><rect x="297.62116" y="546" width="25" height="20" fill="#fff"/><rect x="74.12116" y="62" width="25" height="20" fill="#fff"/><path d="M294.649,708.89115c1.98712-15.97873,11.88987-31.72242,27.12875-36.92234a74.18719,74.18719,0,0,0,.00368,50.93456c2.34162,6.334,5.6056,13.13517,3.403,19.5189-1.37044,3.97214-4.723,7.01117-8.47056,8.9114-3.74775,1.90023-7.907,2.80591-12.01415,3.69347l-.80832.66853C297.37131,740.973,292.66187,724.86988,294.649,708.89115Z" transform="translate(-275.16231 -140.69206)" fill="#cacaca"/><path d="M321.929,672.27094a63.41017,63.41017,0,0,0-15.76366,35.68721,27.30644,27.30644,0,0,0,.31061,8.55,15.66151,15.66151,0,0,0,3.89522,7.26415c1.75566,1.92895,3.77489,3.69874,5.03108,6.02087a9.5896,9.5896,0,0,1,.4685,7.82859c-1.10909,3.181-3.295,5.77388-5.52082,8.23516-2.47132,2.73279-5.08154,5.53214-6.132,9.15509-.12728.439-.801.21581-.67388-.2225,1.82768-6.30331,7.94653-9.88371,10.8646-15.561,1.36162-2.64914,1.93314-5.72467.65664-8.52111-1.11624-2.44536-3.19693-4.27216-4.99145-6.2099a16.71194,16.71194,0,0,1-4.07333-6.96087,25.24419,25.24419,0,0,1-.63819-8.50654,61.51926,61.51926,0,0,1,4.493-18.69516,64.53452,64.53452,0,0,1,11.60414-18.59624c.30343-.33978.771.19469.46958.53224Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M306.35632,703.6635a9.51355,9.51355,0,0,1-7.24169-9.96579c.03616-.45517.74517-.42037.709.03541a8.80933,8.80933,0,0,0,6.75522,9.25649c.44427.10563.21922.77891-.2225.67389Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M309.35213,722.91152a18.33661,18.33661,0,0,0,8.18838-10.56053c.12883-.4385.80256-.21547.67388.22251a19.07277,19.07277,0,0,1-8.54309,10.97186c-.39352.23343-.71056-.40168-.31917-.63384Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M313.293,684.19211a5.38515,5.38515,0,0,0,5.10328-.25906c.39036-.2383.707.39709.31917.63384a6.03449,6.03449,0,0,1-5.645.2991.36675.36675,0,0,1-.22569-.44819.35663.35663,0,0,1,.4482-.22569Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M368.228,700.50877c-.23952.15573-.479.31146-.71885.47319a70.91879,70.91879,0,0,0-9.06782,7.0795c-.22168.19766-.44336.40132-.6589.60494a74.76451,74.76451,0,0,0-16.23731,22.22687,72.60626,72.60626,0,0,0-3.97708,10.28987c-1.46753,4.86943-2.67127,10.26589-5.57621,14.24889a12.45589,12.45589,0,0,1-.97036,1.19789H304.76965c-.05966-.02994-.11961-.05392-.17956-.08386l-1.04816.04793c.04212-.18568.08979-.37734.1319-.563.024-.10781.05381-.21562.07779-.32342.01784-.07187.036-.14378.048-.20965.00585-.024.012-.04789.01784-.06588.012-.06587.03013-.12579.04212-.18567q.39525-1.60815.81448-3.21633c0-.006,0-.006.00585-.012a106.75665,106.75665,0,0,1,8.98417-23.58646c.11991-.2216.23952-.44921.37142-.67081a69.2816,69.2816,0,0,1,6.22312-9.43938,61.24959,61.24959,0,0,1,4.07885-4.66577,50.932,50.932,0,0,1,12.74542-9.54718c9.41554-4.97124,20.31617-6.87588,30.37862-3.83923C367.71883,700.34708,367.97063,700.42491,368.228,700.50877Z" transform="translate(-275.16231 -140.69206)" fill="#cacaca"/><path d="M368.169,700.842a63.41025,63.41025,0,0,0-34.07257,19.00342,27.30693,27.30693,0,0,0-4.8997,7.01373,15.6616,15.6616,0,0,0-1.2634,8.14521c.24044,2.59719.78714,5.226.39205,7.83639a9.5896,9.5896,0,0,1-4.33927,6.53276c-2.80076,1.87214-6.10718,2.62628-9.36621,3.2514-3.61853.69407-7.388,1.35767-10.40808,3.61792-.36592.27386-.76946-.30994-.4041-.58338,5.25433-3.93245,12.29554-3.10724,18.04358-5.88337,2.68215-1.2954,4.99016-3.40694,5.65459-6.40828.581-2.62454.01957-5.33586-.24661-7.96346a16.71219,16.71219,0,0,1,.9386-8.01029,25.24442,25.24442,0,0,1,4.612-7.17623A61.51921,61.51921,0,0,1,347.653,707.99584a64.53462,64.53462,0,0,1,20.46148-7.86157c.44684-.0886.4984.61966.05448.70769Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M336.8346,716.53135a9.51354,9.51354,0,0,1,.218-12.31712c.30291-.34165.84806.113.54474.45512a8.80932,8.80932,0,0,0-.17937,11.4579c.29112.35182-.29392.7539-.58339.4041Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M327.638,733.7035a18.33661,18.33661,0,0,0,12.89613-3.502c.36687-.27256.77053.31115.40409.58338a19.07279,19.07279,0,0,1-13.427,3.61688c-.45474-.05054-.3255-.74852.12678-.69825Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M354.09623,705.16087a5.38517,5.38517,0,0,0,4.23066,2.86568c.45516.04476.32542.74272-.12678.69825a6.03447,6.03447,0,0,1-4.68726-3.15984.36677.36677,0,0,1,.08965-.49374.35662.35662,0,0,1,.49373.08965Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M771.649,708.89115c1.98712-15.97873,11.88987-31.72242,27.12875-36.92234a74.18719,74.18719,0,0,0,.00368,50.93456c2.34162,6.334,5.6056,13.13517,3.403,19.5189-1.37044,3.97214-4.723,7.01117-8.47056,8.9114-3.74775,1.90023-7.907,2.80591-12.01415,3.69347l-.80832.66853C774.37131,740.973,769.66187,724.86988,771.649,708.89115Z" transform="translate(-275.16231 -140.69206)" fill="#cacaca"/><path d="M798.929,672.27094a63.41017,63.41017,0,0,0-15.76366,35.68721,27.30644,27.30644,0,0,0,.31061,8.55,15.66151,15.66151,0,0,0,3.89522,7.26415c1.75566,1.92895,3.77489,3.69874,5.03108,6.02087a9.5896,9.5896,0,0,1,.4685,7.82859c-1.10909,3.181-3.295,5.77388-5.52082,8.23516-2.47132,2.73279-5.08154,5.53214-6.132,9.15509-.12728.439-.801.21581-.67388-.2225,1.82768-6.30331,7.94653-9.88371,10.8646-15.561,1.36162-2.64914,1.93314-5.72467.65664-8.52111-1.11624-2.44536-3.19693-4.27216-4.99145-6.2099a16.71194,16.71194,0,0,1-4.07333-6.96087,25.24419,25.24419,0,0,1-.63819-8.50654,61.51926,61.51926,0,0,1,4.493-18.69516,64.53452,64.53452,0,0,1,11.60414-18.59624c.30343-.33978.771.19469.46958.53224Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M783.35632,703.6635a9.51355,9.51355,0,0,1-7.24169-9.96579c.03616-.45517.74517-.42037.709.03541a8.80933,8.80933,0,0,0,6.75522,9.25649c.44427.10563.21922.77891-.2225.67389Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M786.35213,722.91152a18.33661,18.33661,0,0,0,8.18838-10.56053c.12883-.4385.80256-.21547.67388.22251a19.07277,19.07277,0,0,1-8.54309,10.97186c-.39352.23343-.71056-.40168-.31917-.63384Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M790.293,684.19211a5.38515,5.38515,0,0,0,5.10328-.25906c.39036-.2383.707.39709.31917.63384a6.03449,6.03449,0,0,1-5.645.2991.36675.36675,0,0,1-.22569-.44819.35663.35663,0,0,1,.4482-.22569Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M845.228,700.50877c-.23952.15573-.479.31146-.71885.47319a70.91879,70.91879,0,0,0-9.06782,7.0795c-.22168.19766-.44336.40132-.6589.60494a74.76451,74.76451,0,0,0-16.23731,22.22687,72.60626,72.60626,0,0,0-3.97708,10.28987c-1.46753,4.86943-2.67127,10.26589-5.57621,14.24889a12.45589,12.45589,0,0,1-.97036,1.19789H781.76965c-.05966-.02994-.11961-.05392-.17956-.08386l-1.04816.04793c.04212-.18568.08979-.37734.1319-.563.024-.10781.05381-.21562.07779-.32342.01784-.07187.036-.14378.048-.20965.00585-.024.012-.04789.01784-.06588.012-.06587.03013-.12579.04212-.18567q.39525-1.60815.81448-3.21633c0-.006,0-.006.00585-.012a106.75665,106.75665,0,0,1,8.98417-23.58646c.11991-.2216.23952-.44921.37142-.67081a69.2816,69.2816,0,0,1,6.22312-9.43938,61.24959,61.24959,0,0,1,4.07885-4.66577,50.932,50.932,0,0,1,12.74542-9.54718c9.41554-4.97124,20.31617-6.87588,30.37862-3.83923C844.71883,700.34708,844.97063,700.42491,845.228,700.50877Z" transform="translate(-275.16231 -140.69206)" fill="#cacaca"/><path d="M845.169,700.842a63.41025,63.41025,0,0,0-34.07257,19.00342,27.30693,27.30693,0,0,0-4.8997,7.01373,15.6616,15.6616,0,0,0-1.2634,8.14521c.24044,2.59719.78714,5.226.392,7.83639a9.5896,9.5896,0,0,1-4.33927,6.53276c-2.80076,1.87214-6.10718,2.62628-9.36621,3.2514-3.61853.69407-7.38805,1.35767-10.40808,3.61792-.36592.27386-.76946-.30994-.4041-.58338,5.25433-3.93245,12.29554-3.10724,18.04358-5.88337,2.68215-1.2954,4.99016-3.40694,5.65459-6.40828.581-2.62454.01957-5.33586-.24661-7.96346a16.71219,16.71219,0,0,1,.9386-8.01029,25.24442,25.24442,0,0,1,4.612-7.17623A61.51921,61.51921,0,0,1,824.653,707.99584a64.53462,64.53462,0,0,1,20.46148-7.86157c.44684-.0886.4984.61966.05448.70769Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M813.8346,716.53135a9.51354,9.51354,0,0,1,.218-12.31712c.30291-.34165.84806.113.54474.45512a8.80932,8.80932,0,0,0-.17937,11.4579c.29112.35182-.29392.7539-.58339.4041Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M804.638,733.7035a18.33661,18.33661,0,0,0,12.89613-3.502c.36687-.27256.77053.31115.40409.58338a19.07279,19.07279,0,0,1-13.427,3.61688c-.45474-.05054-.3255-.74852.12678-.69825Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M831.09623,705.16087a5.38517,5.38517,0,0,0,4.23066,2.86568c.45516.04476.32542.74272-.12678.69825a6.03447,6.03447,0,0,1-4.68726-3.15984.36677.36677,0,0,1,.08965-.49374.35662.35662,0,0,1,.49373.08965Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M482.47682,215.70424c-2.089-1.47455-4.37445-3.01219-6.93063-2.95072-6.18682.14877-9.52244,9.21836-15.70289,8.89941-3.94144-.20341-6.5579-4.20737-10.2278-5.65918-4.77786-1.89-10.858,1.80641-11.37928,6.91794l.6136-.56159a148.14651,148.14651,0,0,0,56.75648,2.622Q489.04163,220.33817,482.47682,215.70424Z" transform="translate(-275.16231 -140.69206)" fill="#f0f0f0"/><path d="M767.47682,174.70424c-2.089-1.47455-4.37445-3.01219-6.93063-2.95072-6.18682.14877-9.52244,9.21836-15.70289,8.89941-3.94144-.20341-6.5579-4.20737-10.2278-5.65918-4.77786-1.89-10.858,1.80641-11.37928,6.91794l.6136-.56159a148.14651,148.14651,0,0,0,56.75648,2.622Q774.04163,179.33817,767.47682,174.70424Z" transform="translate(-275.16231 -140.69206)" fill="#f0f0f0"/><path d="M608.47682,341.70424c-2.089-1.47455-4.37445-3.01219-6.93063-2.95072-6.18682.14877-9.52244,9.21836-15.70289,8.89941-3.94144-.20341-6.5579-4.20737-10.2278-5.65918-4.77786-1.89-10.858,1.80641-11.37928,6.91794l.6136-.56159a148.14651,148.14651,0,0,0,56.75648,2.622Q615.04163,346.33817,608.47682,341.70424Z" transform="translate(-275.16231 -140.69206)" fill="#f0f0f0"/><path d="M632.75863,514.06191a9.93056,9.93056,0,0,0,8.51358-12.625L670.109,481.09446l-17.07452-6.69027-24.76615,20.34324a9.98437,9.98437,0,0,0,4.49035,19.31448Z" transform="translate(-275.16231 -140.69206)" fill="#ffb6b6"/><path d="M827.19669,527.27336a9.93058,9.93058,0,0,0-6.02792-13.9834L819.621,478.03407l-14.85179,10.75749,3.74678,31.83035a9.98437,9.98437,0,0,0,18.68075,6.65145Z" transform="translate(-275.16231 -140.69206)" fill="#ffb6b6"/><polygon points="504.392 601.895 489.546 601.895 482.483 544.63 504.395 544.631 504.392 601.895" fill="#ffb6b6"/><path d="M783.34081,756.97871l-47.87122-.00178v-.60549a18.63382,18.63382,0,0,1,18.63281-18.63252h.00118l8.74432-6.63389,16.31493,6.6349,4.17887.00017Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><polygon points="410.119 601.502 395.426 599.378 396.625 541.691 418.312 544.826 410.119 601.502" fill="#ffb6b6"/><path d="M686.97067,756.97871l-47.37887-6.84816.0866-.59927a18.63381,18.63381,0,0,1,21.106-15.77617l.00117.00017,9.60318-5.31512,15.19832,8.9,4.13588.59782Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><path d="M801.87032,521.87517q-12.16278-3.04076-24.3255-6.08143-19.38666-4.8466-38.77338-9.69329l-8.90112-2.22528a1.49762,1.49762,0,0,0-.72858-.00605,1.39682,1.39682,0,0,0-.96539.69538q-2.99561,4.99273-5.99127,9.98541l-14.13392,23.55652Q699.79266,551.87074,691.534,565.635L678.39308,587.5366q-1.75625,2.92713-3.51257,5.85425a4.95193,4.95193,0,0,0-.93133,2.22192c-.40186,4.49811-.693,9.009-1.03937,13.51166q-1.04856,13.63092-2.097,27.26172L668.343,668.4926q-1.08215,14.06725-2.16424,28.13458-.5766,7.49661-1.15332,14.9931l-.0539.7013a1.52075,1.52075,0,0,0,1.1012,1.44641l23.59259,7.86419,3.40741,1.13581a1.50663,1.50663,0,0,0,1.84522-1.04767q2.32342-13.94073,4.64691-27.88141,3.73838-22.4307,7.47687-44.86133.58528-3.51168,1.17053-7.02337a30.9843,30.9843,0,0,0,.59375-3.54981,7.72731,7.72731,0,0,0,1.16534-1.87958,12.38273,12.38273,0,0,0,.90436-9.08661l-.11853-.378c-.01477-.05279-.02728-.09216-.04022-.13421q.16452-.98685.329-1.9737.48459-2.90761.96924-5.8153.38781-2.32719.77569-4.65436c.01251-.075.03412-.15979.05328-.24433a.83658.83658,0,0,1-.311.143c.05768-.01434.1308-.13953.176-.176.05451-.044.10505-.09576.15888-.14111a.851.851,0,0,0,.01654-.14325c-.01508-.283.13733-.17975.13965.00446.981-.85706,1.86468-1.89978,2.77618-2.81134q6.98721-6.98722,13.97437-13.97437,12.59847-12.59848,25.19683-25.19678V702.52873c0,6.16571-.20208,12.37,0,18.53345.00281.08624,0,.173,0,.2594a1.52182,1.52182,0,0,0,1.5,1.5h27a1.5374,1.5374,0,0,0,1.5-1.5q.4965-5.46159.993-10.9231,1.13286-12.46105,2.26568-24.92218,1.23414-13.5759,2.46832-27.15173l1.60108-17.61164c.03888-.42846.109-.87658.12488-1.31262.05993-.14508.12481-.30817.16113-.386q.37143-.79668.74292-1.59344c1.30225-2.79346,2.26044-5.56244,1.89355-8.7085a13.43179,13.43179,0,0,0-.55645-2.634c-.14942-.45605-.32746-.903-.52045-1.34247-.10175-.23169-.20636-.4718-.32733-.695a.42616.42616,0,0,1,.0025-.05615c.4198-2.25244.42438-4.66827.63159-6.94763q.565-6.21506,1.13-12.43l2.27-24.96991.83624-9.19873,2.28406-25.12464q.94683-10.41467,1.89361-20.82928.05283-.58137.10571-1.16284A1.50588,1.50588,0,0,0,801.87032,521.87517Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><path d="M712.84419,614.23832a.38839.38839,0,0,0,.18-.31292c-.05237.04577-.10321.09424-.15619.13879C712.86031,614.123,712.85774,614.17839,712.84419,614.23832Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><path d="M783.47155,352.32158l-18-18v-9l-36,9v18s-27,54-18,81c5.286,15.85784,7.46732,41.02944,8.36751,59.10411.08563,1.71937,2.38039,3.68957,2.4444,5.26637.05639,1.38882-6.0419,4.74239-6,6,.26193,7.861,4.18809,10.62952,4.18809,10.62952l81,9c-.56214-6.58173.9876-8.16887.81191-14.62952-.05792-2.13018-4.98634-8.88369-5-11-.01284-1.99058,2.96-4.28125,2.98731-6.25926q.02639-1.91409.07824-3.8202c.59829-21.9667,3.75763-43.131,10.12254-63.291Z" transform="translate(-275.16231 -140.69206)" fill="#386641"/><path d="M802.79714,508.2155l-1.82227-68.7583L764.219,373.29606a14.48632,14.48632,0,0,1,25.32666-14.07031l39.43262,70.97852-.00733.14355-2.188,41.37061-2.98291,15.93115,1.7622,4.85107-.8042,14.66895Z" transform="translate(-275.16231 -140.69206)" fill="#386641"/><path d="M658.58962,500.068l-22.13233-14.315,53.63965-47.23632L718.40456,368.32a14.48614,14.48614,0,0,1,21.23584-6.78906h0a14.4953,14.4953,0,0,1,5.63476,17.625l-30.376,75.32617-14.27149,8.58642-5.38281,7.36329-4.5918-.2212-1.50195,5.14209-8.58643,3.76221Z" transform="translate(-275.16231 -140.69206)" fill="#386641"/><path d="M774.47155,285.45034A31.05354,31.05354,0,1,1,743.418,254.39682h0a30.97626,30.97626,0,0,1,31.05351,30.89881Q774.47173,285.373,774.47155,285.45034Z" transform="translate(-275.16231 -140.69206)" fill="#ffb6b6"/><path d="M712.46767,243.73983c3.63775-7.8224,10.67754-6.27584,16.83431-3.62427,7.79661-1.7294,15.21169-6.907,23.61208-3.845,8.27476,12.03514,36.05679,8.49422,30.14621,28.08752-.00773,4.695,8.83449,1.96219,7.29081,9.65149,4.684,14.79795-16.90731,42.82307-29.30243,36.92144,3.06549-5.61822,10.06824-18.37909-.553-19.64478-22.84787,21.25912-2.35732-40.48217-31.06514-22.52681C719.92522,277.45833,706.91214,252.44092,712.46767,243.73983Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><path d="M923.647,759.30794H276.353a1.19069,1.19069,0,0,1,0-2.38137H923.647a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-275.16231 -140.69206)" fill="#cacaca"/><path d="M763.75318,301.66708h0a5.19635,5.19635,0,0,0-.9736-5.64116,7.356,7.356,0,0,0-1.82248-1.37371l-.263-.06869a3.57768,3.57768,0,0,0-3.98737,1.647l-.13865.23559a3.57766,3.57766,0,0,0-.22038,3.18768l.52241,1.257-3.31424,5.46784a1.07983,1.07983,0,0,0,.31382,1.451l.73011.49938a1.07982,1.07982,0,0,0,1.51364-.30073l2.9371-4.49616a3.57474,3.57474,0,0,0,.93731.26108h0A3.57769,3.57769,0,0,0,763.75318,301.66708Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M758.55864,300.99539a.78394.78394,0,0,1-.24939-1.079l1.16141-1.85971a.78307.78307,0,1,1,1.32837.82958l-1.16142,1.85971A.78394.78394,0,0,1,758.55864,300.99539Z" transform="translate(-275.16231 -140.69206)" fill="#2f2e41"/><path d="M649.33452,517.62192l-14.518,7.4369a3.69276,3.69276,0,0,1-4.96462-1.60125L611.02741,486.7092a3.69277,3.69277,0,0,1,1.60122-4.96463l14.518-7.4369a3.69277,3.69277,0,0,1,4.96462,1.60125l18.82449,36.74838A3.69276,3.69276,0,0,1,649.33452,517.62192Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/><path d="M627.50625,475.41005l-1.616.82781a.6118.6118,0,0,0-.26532.82263,1.25077,1.25077,0,0,1-.54245,1.68186l-7.90358,4.04864a1.25077,1.25077,0,0,1-1.68186-.54245.61178.61178,0,0,0-.82263-.26532l-1.42492.72992a2.80116,2.80116,0,0,0-1.21445,3.7654L630.7257,522.9657a2.80116,2.80116,0,0,0,3.7654,1.21446l14.25678-7.30308a2.80117,2.80117,0,0,0,1.21444-3.76541l-18.69067-36.48716A2.80118,2.80118,0,0,0,627.50625,475.41005Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><path d="M622.64809,478.82339l-4.45882,2.284a.17892.17892,0,1,1-.16314-.31849l4.45882-2.284a.17892.17892,0,1,1,.16314.31848Z" transform="translate(-275.16231 -140.69206)" fill="#fff"/><circle cx="348.10488" cy="337.61317" r="0.14314" fill="#fff"/><path d="M637.98011,487.05189a.32242.32242,0,0,1-.43347-.13981l-2.87137-5.60537a.32206.32206,0,1,1,.57327-.29367l2.87138,5.60538A.32243.32243,0,0,1,637.98011,487.05189Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/><path d="M614.648,493.77709a.32241.32241,0,0,1-.43347-.13981l-.65258-1.27394a.32206.32206,0,0,1,.57328-.29367l.65258,1.274A.32241.32241,0,0,1,614.648,493.77709Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/><path d="M615.85525,496.1339a.32242.32242,0,0,1-.43347-.13981l-.65259-1.274a.32206.32206,0,1,1,.57328-.29366l.65258,1.27395A.32242.32242,0,0,1,615.85525,496.1339Z" transform="translate(-275.16231 -140.69206)" fill="#3f3d56"/></svg>
    `;

    return (
        <SvgXml xml={xml} height={width} width={width}/>
    );
};

export default WalkingManSVG;