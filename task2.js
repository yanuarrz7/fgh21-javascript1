const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

const total = mtk + bahasaIndonesia + bahasaInggris + ipa
const avg = total / 4

console.log(avg)

if (avg < 60) {
    console.log("Grade: E");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    console.log("Grade: B");
} else if (avg <= 100) {
    console.log("Grade: A");
}