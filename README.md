# Get Zammad groups ID and Names and display it in a Google Sheet
A small snippet for Google Appscript and Zammad to display group name and id of all groups of a Zammad installation.
Even though it's possible to obtain a group list with Group.find_each in the Ruby Console or with a wget/curl to the APIs I wanted a more human-readable mean of viewing a Group name / id list.
Here's a simple script to have an up-to-date list with Google App Script.

Ruby equivalent:

Group.find_each


Wget/Curl equivalent:

wget https://_____________/api/v1/groups
