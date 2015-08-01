import os
import logging
import datetime
import wsgiref.handlers
#import cloudstorage as gcs

from random import randint
from google.appengine.ext import db
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.api import app_identity
from google.appengine.ext.webapp import template

class MainHandler(webapp.RequestHandler):

  def get(self):
    loginTemplate = os.path.join(os.path.dirname(__file__),'templates/login.htm')
    appTemplate   = os.path.join(os.path.dirname(__file__),'templates/index.htm')

    user = users.get_current_user()

    if user:
    	outstr = template.render(appTemplate,{'logoutUrl' : users.create_logout_url('/')})
    else:
    	outstr = template.render(loginTemplate,{'loginUrl' : users.create_login_url('/')})

    self.response.out.write(unicode(outstr))

class histograma(webapp.RequestHandler):

	def get(self):
		print "hola mundo"
#---------------------------------------------------------------------------------------
def main():
  application = webapp.WSGIApplication([
    ('/.*', MainHandler),
    ('/histograma', histograma)
  ], debug=True)
  
  wsgiref.handlers.CGIHandler().run(application)

if __name__ == '__main__':
  main()
#---------------------------------------------------------------------------------------      