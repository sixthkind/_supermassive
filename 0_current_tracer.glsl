#define M_PI 3.141592653589793238462643383279
#define ROT_Y(a) mat3(0, cos(a), sin(a), 1, 0, 0, 0, sin(a), -cos(a))
#define DEG_TO_RAD (M_PI/180.0)

uniform float time;
uniform vec2 resolution;


uniform sampler2D bg_texture;
mat3 BG_COORDS = ROT_Y(45.0 * DEG_TO_RAD);

// helper functions
vec2 squareFrame(vec2 screenSize)
{
  vec2 position = 2.0 * (gl_FragCoord.xy / screenSize.xy) - 1.0;
  position.x *= screenSize.x / screenSize.y;
  return position;
}

vec2 sphere_map(vec3 p){
  return vec2(atan(p.x,p.y)/M_PI*0.5+0.5, asin(p.z)/M_PI+0.5);
}

// Ray represents a ray of light's origin and direction
struct Ray {
  vec3 origin; // Origin
  vec3 direction; // Direction
};


void main()	{
  vec2 uv = squareFrame(resolution);
  vec3 pixelPos = vec3(uv, 0.);
  
  // The eye position in this example is fixed.
  vec3 eyePos = vec3(0, 0, 0.1); // Some distance in front of the screen

  // The ray for the raytrace - which is just intersectSphere in this tutorial
  vec3 rayDir = normalize(pixelPos - eyePos);
  vec2 tex_coord = sphere_map(rayDir*BG_COORDS);
    
  gl_FragColor = texture2D(bg_texture, tex_coord);
}