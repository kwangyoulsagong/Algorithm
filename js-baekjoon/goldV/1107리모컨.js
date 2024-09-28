const { channel } = require("diagnostics_channel");
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 수빈이는 tv를 보고 있다 수빈이는 채널을 돌리려고 했지만 버튼을 너무 세게 누루는 바람에 일부 숫자 버튼이 고장
// 리모컨에는 0~9 숫자와 + -가 있다. +누르면 현재 채널 +1 -를 누르면 현재 채널 -1
// 채널 0에서 - 누르면 채널이 변화지 않음, 채널은 무한대 만큼 있음
// 수빈이가 지금 이동하련느 채널은 N, 어떤 버튼이 고장났는지 주어졌을떄, 채널 N으로 이동하기 위해서 버튼을 최소 몇번을 눌러야하는지 구하는 프로그램이다
// 수빈이가 보고 있는 채널은 100번

const currentChannel = 100;

const bruteforce = (target, remote) => {
  let minClicks = Math.abs(Number(target) - currentChannel);
  for (let i = 0; i <= 999999; i++) {
    let channel = i.toString();
    let isPossible = true;
    for (let num of channel) {
      if (!remote.includes(Number(num))) {
        isPossible = false;
        break;
      }
    }
    if (isPossible) {
      const clicks = channel.length + Math.abs(i - target);
      minClicks = Math.min(minClicks, clicks);
    }
  }
  console.log(minClicks);
};

let target = input.shift();
let n = input.shift();
const brokenNumber = [];
const arr = input.map((v) => v.split(" ").map(Number))[0];
for (let i = 0; i < n; i++) {
  brokenNumber.push(arr[i]);
}

const remote = [];
for (let i = 0; i < 10; i++) {
  if (!brokenNumber.includes(i)) {
    remote.push(i);
  }
}

bruteforce(target, remote);
