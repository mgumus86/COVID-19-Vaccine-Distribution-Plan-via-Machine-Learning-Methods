# Covid-19
## Live
 Live server- [http://206.189.202.125:3000/](http://206.189.202.125:3000/) - requires manually updating, so may not be up to date
 
##  Local Installation
Required programs - if you're using windows let me know, installation of some of these might be harder
| Program |
| ------ |
| Python | 
| pip   |
| npm   |
|git|

npm can be installed with

Linux - ```apt-get install npm```

Mac - ```brew install npm```

git can be installed with

```brew install git```


Pip modules we need - (use pip3/python3 -m pip if need be)
```sh
pip install flask
pip install flask_cors
pip install pandas
pip install sklearn
```
### Clone the repo
I'm assuming you're cloning this in your home directory - you don't have to but a few of the commands I've listed include ```~``` so you can copy paste them if you install it there

run ```git clone https://github.com/aj-brooks/AJMR.git```

You will be prompted for you username and password. Enter your git username. You password is actually an access token you must create, not your git password.

https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

Once cloned, go into the server repo and start flask.

``` sh 
cd ~/AJMR/server
export FLASK_APP=app.py
flask run
```

After taking a few moments to load the saved models, you should see - 

``` * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)```

Open  http://127.0.0.1:5000/data/all-age?model=naive-bayes&sex=male&race=bn in your browser

If you get a json object, its working!

Now we need to start the frontend. Leave flask running - in a new terminal tab, run

```cd ~/AJMR/frontend/ajmr``` (not just frontend)

Run `npm install`. This will download all the dependecies for the project, kind of like pip (but easier)

Then, run `npm start`. Your browser should open in a few moments to the page.


## Building models

To reduce startup time, we've included the serialized models in the repo. If you want to re-train them,  cd into `server/models`. Delete the models and  run `python train.py`. You'll need to restart flask to have it import the new models. Note that while this is in the server folder, its really just its own script.  


