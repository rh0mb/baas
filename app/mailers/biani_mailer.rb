class BianiMailer < ActionMailer::Base
  headers = {'Return-Path' => 'contato@bitbang.com.mx'}

  def contact_mail(user_info)
    @user_info = user_info

    mail(
      to: "info@bitbang.com.mx",
      subject: "Formulario de Contato de BianiApp",
      from: "Biani App <contacto@bitbang.com.mx>",
      return_path: "contato@bitbang.com.mx",
      date: Time.now,
      content_type: "text/html"
    )
  end
end



