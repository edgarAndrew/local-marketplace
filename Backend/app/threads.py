import threading
from django.conf import settings
from django.core.mail import send_mail

context = {}
context["site_url"] = settings.FRONTEND_URL

class send_contact_email(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            subject = 'Thanks for filling up Contact Us form.'
            body = "Thank You for filling up the Contact Us Form. We would contact you soon."
            send_mail(subject , body ,settings.EMAIL_HOST_USER ,[self.email, settings.ADMIN_EMAIL])
        except Exception as e:
            print(e)
