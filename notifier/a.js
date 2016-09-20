#!/usr/bin/env node

pd = console.log
var request = require("request")
var notify = require("libnotify")
var cheerio = require("cheerio")

//var URL="http://detail.tmall.com/item.htm?spm=p454568002.4.w5003-4306403248.2.G6Rrg1&id=35392148256&scene=taobao_shop"
var URL="http://detail.tmall.com/item.htm?spm=p461925153.4.w5003-4372319859.1.dalhwT&id=20325773387&mt=&scene=taobao_shop"
request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body)
    var result = $('#J_LinkBuy')[0]
    pd("result", result)
    if (result) {
      notify.notify("小米盒子有货了")
    }
  }
})
