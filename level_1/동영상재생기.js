function solution(video_len, pos, op_start, op_end, commands) {
  var video_len_sec =
    Number(video_len.split(':')[0]) * 60 + Number(video_len.split(':')[1]);
  var pos_sec = Number(pos.split(':')[0]) * 60 + Number(pos.split(':')[1]);
  var op_start_sec =
    Number(op_start.split(':')[0]) * 60 + Number(op_start.split(':')[1]);
  var op_end_sec =
    Number(op_end.split(':')[0]) * 60 + Number(op_end.split(':')[1]);

  var result_sec = pos_sec;
  var result = '';

  commands.forEach((command) => {
    if (command === 'next') {
      if (result_sec >= op_start_sec && result_sec <= op_end_sec) {
        result_sec = op_end_sec;
      }
      if (result_sec + 10 > video_len_sec) {
        result_sec = video_len_sec;
      } else if (
        result_sec + 10 >= op_start_sec &&
        result_sec + 10 <= op_end_sec
      ) {
        result_sec = op_end_sec;
      } else {
        result_sec += 10;
      }
    } else {
      if (result_sec - 10 < 0) {
        result_sec = 0;
      } else if (
        result_sec - 10 >= op_start_sec &&
        result_sec - 10 <= op_end_sec
      ) {
        result_sec = op_end_sec;
      } else {
        result_sec -= 10;
      }
    }
  });

  result =
    String(Math.floor(result_sec / 60)).padStart(2, '0') +
    ':' +
    String(result_sec % 60).padStart(2, '0');

  return result;
}
