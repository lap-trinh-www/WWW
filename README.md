Bài tập lớn WWW

GVHD: Nguyễn Thị Thu Hà

Thành viên nhóm:

Nguyễn Xuân Long

Trần Minh Trí

Nguyễn Văn Thuận

cài đặt thêm [typescript(global)](https://www.typescriptlang.org/docs/) và [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable):

npm install --global yarn

yarn add -g typescript

khởi động web:

cd client

yarn

yarn dev

add css in file with path: client\node_modules\react-date-range\dist\styles.css

.rdrCalendarWrapper {
width: 62rem !important;
}

.calendarWrap {
display: inline-block;
position: relative;
}

.calendarElement {
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 40px;
border: 1px solid #ccc;
z-index: 999;
}
