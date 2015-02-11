# Trimethyl

[![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

### [API Documentation](http://caffeinalab.github.io/Trimethyl/)

### Alloy-Titanium framework made in [Caffeina](http://caffeinalab.com)

A collection of very useful modules to work with Appcelerator Titanium and Alloy.

Most of these modules are proxy object for Titanium API and some of these add features missing or expose functions usefuls for UI normalization.

![image](http://f.cl.ly/items/3l1F2O1E0O1s0V38402p/trimelogo.png)


## Installation

To install this framework, you have to copy it to your **app/lib** directory.

### Stable installation

Download the latest release and unzip in **app/lib/T**

Or, open your Terminal app, move to your Titanium project, and simply type:

```
wget https://github.com/CaffeinaLab/Trimethyl/archive/1.2.2.tar.gz -O T.tar.gz;
mkdir -p app/lib/T;
tar -xvf T.tar.gz -C app/lib/T --strip-components=1
```

### Master installation

If you want to install the master version directly from GitHub, just clone this repository:

```
git clone git@github.com:CaffeinaLab/Trimethyl.git app/lib/T
```

The master version *coulb be* unstable, so use at your risk.

## Configuration

Each module reads from the **config.json** its configuration.

For example, the module named **X**, will read the `Alloy.CFG.T.X` object.

You can customize the options passed for each modules, editing your **config.json** file:

```javascript
{
	...
	"T":{
		"X": {
			...
		},
		...
	}
	...
```

## Initialization

In your *app/alloy.js* file, on the first line:

```javascript
require('T/trimethyl');
```

Or, if you want to provide an helper to load the Trimethyl modules, write:

```javascript
function T(name) { return require('T/'+name); }
T('trimethyl');
```

Requiring **T** will bootstrap some important framework files, set prototypes, TSS vars and `Alloy.Globals` vars.

## CommonJS Modules

To require a module, just call

```javascript
var X = require('T/X'); /* or T('X') */
```

where `X` is the module that you want to use.

**Please refer to the [documentation](http://caffeinalab.github.io/Trimethyl/) for full-usage**.

Each module read the `Alloy.CFG.T.__MODULENAME__` properties in your *config.json* file to configure itself.

## NON-CommonJS modules

There are some modules that can be used too in your XML Alloy files, like:

* **XP.UI**: Provide cross-platforms UI elements to handle differences between platforms
* **UI**: Provide new UI elements that missing from some platforms

**Please refer to the [documentation](http://caffeinalab.github.io/Trimethyl/) for full-usage**.

## License

```
Copyright 2014 Caffeina

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/lastguest/trimethyl/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

