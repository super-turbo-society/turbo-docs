# Use Custom Shaders

:::note

Custom shaders are in an early stage of development. Breaking changes are likely in future updates.

:::

Use `.wsgl` files to add visual effects to your game. To get started, create a folder in your project directory called `shaders`. Then add your `.wsgl` files there.

Here's a basic template you cna use as a starting point for creating custom shaders:

```wgsl
// Global uniform with viewport and tick fields
struct Global {
    camera: vec3<f32>,
    tick: u32,
    viewport: vec2<f32>,
}

@group(0) @binding(0)
var<uniform> global: Global;

// Vertex input to the shader
struct VertexInput {
    @location(0) pos: vec2<f32>,
    @location(1) uv: vec2<f32>,
};

// Output color fragment from the shader
struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(1) uv: vec2<f32>,
};

// Main vertex shader function
@vertex
fn vs_main(in: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = vec4<f32>(in.pos, 0., 1.);
    out.uv = in.uv;
    return out;
}

// Bindings for the texture
@group(1) @binding(0)
var t_canvas: texture_2d<f32>;

// Sampler for the texture
@group(1) @binding(1)
var s_canvas: sampler;

// Main fragment shader function
@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    return textureSample(t_canvas, s_canvas, in.uv);
}
```



To activate the shader in your game, use `shaders::set("shader");`, using the file name for your shader file.

To turn off a shader, use `shaders::reset();`.

:::tip

You can only have one active shader at a time. You can read the current shader with `shaders::get()`, which returns the name of the current shader. This default shader name is `""`.

:::