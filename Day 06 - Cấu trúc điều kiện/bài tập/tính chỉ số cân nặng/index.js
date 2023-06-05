let weight = prompt('Enter weight')
let height = prompt('Enter height')
let bmi = Number('weight') / (Number('height') / 100) ** 2

let bmi_class = ''
if (bmi < 16) {
    bmi_class = 'gay do III'
} else if (bmi < 17) {
    bmi_class = 'gay do II'
} else if (bmi < 18.5) {
    bmi_class = 'gay do I'
} else if (bmi < 25) {
    bmi_class = 'binh thuong'
} else if (bmi < 30) {
    bmi_class = 'thua can'
} else if (bmi < 35) {
    bmi_class = 'beo phi do I'
} else if (bmi < 40) {
    bmi_class = 'beo phi do II'
} else if (bmi > 40) {
    bmi_class = 'beo phi do III'
} else {
    bmi_class = 'khong co bmi'
}
                        
alert(bmi_class)