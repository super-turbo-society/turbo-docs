# Shaders

Use `.wsgl` files to add visual effects to your game. To get started, create a folder in your project directory called `shaders`. Then add your `.wsgl` files there.

To activate the shader in your game, use `shaders::set("shader");`, using the file name for your shader file.

To turn off a shader, use `shaders::reset();`.

:::tip

You can only have one active shader at a time. You can read the current shader with `shaders::get()`, which returns the name of the current shader, or returns `empty` if there is not one.

:::