#  Licensed to the Apache Software Foundation (ASF) under one or more
#  contributor license agreements.  See the NOTICE file distributed with
#  this work for additional information regarding copyright ownership.
#  The ASF licenses this file to You under the Apache License, Version 2.0
#  (the "License"); you may not use this file except in compliance with
#  the License.  You may obtain a copy of the License at
#
#       https://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

module Jekyll
  class ScaladocTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      arr = text.split(' ')
      @path = arr.shift.strip
      @label = arr.join(' ') # Optional.
      if @label.empty? then @label = @path end
    end

    def render(context)
      "<a target=\"scaladoc\" href=\"/apis/latest/org/apache/nlpcraft/#{@path}\">#{@label}</a>"
    end
  end

  class Scaladoc2Tag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      arr = text.split(' ')
      @path = arr.shift.strip
      @label = arr.join(' ') # Optional.
      if @label.empty? then @label = @path end
    end

    def render(context)
      "<a target=\"scaladoc\" class=\"not-code\" href=\"/apis/latest/org/apache/nlpcraft/#{@path}\">#{@label}</a>"
    end
  end
end

Liquid::Template.register_tag('scaladoc', Jekyll::ScaladocTag)
Liquid::Template.register_tag('scaladoc2', Jekyll::Scaladoc2Tag)