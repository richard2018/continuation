var test, a, b, c, d, e, f;
test = function (value, callback) {
  console.log('called');
  callback(value);
};
var _$parallel_done_0 = 0;
var _$errors_0 = [];
(function (_$cont) {
  test(1, function (arguments, _$param0) {
    ++_$parallel_done_0;
    a = _$param0;
    _$cont();
  }.bind(this, arguments));
  test(2, function (arguments, _$param1) {
    ++_$parallel_done_0;
    b = _$param1;
    _$cont();
  }.bind(this, arguments));
  test(3, function (arguments, _$param2) {
    ++_$parallel_done_0;
    c = _$param2;
    _$cont();
  }.bind(this, arguments));
}(function (_$err) {
  if (_$err)
    _$errors_0.push(_$err);
  if (_$parallel_done_0 !== 3)
    return;
  if (_$errors_0.length > 0)
    throw _$errors_0;
  _$parallel_done_0 = undefined;
  _$err = undefined;
  _$errors_0 = undefined;
  console.log(a, b, c);
  var _$parallel_done_1 = 0;
  var _$errors_1 = [];
  (function (_$cont) {
    test(4, function (arguments, _$param3) {
      ++_$parallel_done_1;
      d = _$param3;
      _$cont();
    }.bind(this, arguments));
    test(5, function (arguments, _$param4) {
      ++_$parallel_done_1;
      e = _$param4;
      _$cont();
    }.bind(this, arguments));
    test(6, function (arguments, _$param5) {
      ++_$parallel_done_1;
      f = _$param5;
      _$cont();
    }.bind(this, arguments));
  }(function (_$err) {
    if (_$err)
      _$errors_1.push(_$err);
    if (_$parallel_done_1 !== 3)
      return;
    if (_$errors_1.length > 0)
      throw _$errors_1;
    _$parallel_done_1 = undefined;
    _$err = undefined;
    _$errors_1 = undefined;
    console.log(d, e, f);
  }));
}));
/* Generated by Continuation.js v0.1.4 */