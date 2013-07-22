class ContactController < ApplicationController

  def contact
  end


  def dispatch_email
    if params[:user_info][:nickname].blank? || params[:user_info][:nickname].nil? # Hidden parameter to check for spam
      if params[:user_info][:name].blank? || params[:user_info][:name].nil?
      	flash[:alert] = "Es necesario llenar todos los campos"
      elsif params[:user_info][:email].blank? || params[:user_info][:email].nil?
      	flash[:alert] = "Es necesario llenar todos los campos"
      elsif params[:user_info][:message].blank? || params[:user_info][:message].nil?
      	flash[:alert] = "Es necesario llenar todos los campos"
      else
      	user_info = params[:user_info]
      	if BianiMailer.contact_mail(user_info).deliver
        	flash[:notice] = "Mensaje enviado correctamente, en bereve nos comunicaremos contigo"
      	else
        	flash[:notice] = "Oops"
      	end
      end
    else
      flash[:alert] = "Spam"
    end
    redirect_to contact_url
  end

  def invoice
  end


  def invoicer_email
    if params[:user_info][:nickname].blank? || params[:user_info][:nickname].nil? # Hidden parameter to check for spam
      if params[:user_info][:name].blank? || params[:user_info][:name].nil?
        flash[:alert] = "Es necesario llenar todos los campos"
      elsif params[:user_info][:email].blank? || params[:user_info][:email].nil?
        flash[:alert] = "Es necesario llenar todos los campos"
      elsif params[:user_info][:message].blank? || params[:user_info][:message].nil?
        flash[:alert] = "Es necesario llenar todos los campos"
      else
        user_info = params[:user_info]
        if BianiMailer.invoice_mail(user_info).deliver
          flash[:notice] = "Mensaje enviado correctamente, en bereve nos comunicaremos contigo"
        else
          flash[:notice] = "Oops"
        end
      end
    else
      flash[:alert] = "Spam"
    end
    redirect_to invoice_url
  end

end
