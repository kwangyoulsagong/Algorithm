function solution(id_list, report, k) {
  var answer = Array(id_list.length).fill(0);
  const reportedList = {};
  const uniqueReports = new Set(report);
  const banned = new Set();
  uniqueReports.forEach((entry) => {
    const [user, target] = entry.split(" ");
    if (!reportedList[target]) {
      reportedList[target] = new Set();
    }
    reportedList[target].add(user);
  });
  for (const [user, target] of Object.entries(reportedList)) {
    if (target.size >= k) {
      banned.add(user);
    }
  }
  for (const value of uniqueReports) {
    const [user, target] = value.split(" ");
    if (banned.has(target)) {
      answer[id_list.indexOf(user)] += 1;
    }
  }

  return answer;
}
