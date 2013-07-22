module ApplicationHelper
	require 'open-uri'

	def flash_class(type)
		case type
		when :alert
			"alert-error"
		when :notice
			"alert-success"
		else
			""
		end
	end

	def banamex_parser
		url = "http://portal.banamex.com.mx/c719_004/economiaFinanzas/es/home?xhost=http://www.banamex.com/"
   	doc = Nokogiri::HTML(open(url))
   	data_array = doc.css("td")
   	dolar = data_array[4].text.gsub(/\s+/, "")
 	end
 	
end
