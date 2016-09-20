#!/usr/bin/env ruby

require "pd"
require "open-uri"
require "nokogiri"
require "libnotify"

doc = Nokogiri::HTML(open("http://hezi.xiaomi.com/"))
result = doc.css("a[href='http://order.xiaomi.com/cart/add/2134900002']").first.attr("style")
pd("result", result)
if result != "display:none"
  Libnotify.show(summary: "小米盒子有货了")
end
